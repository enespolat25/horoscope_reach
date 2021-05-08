// Kontrat

// TODO: Array'lerden 0'ları temizle

// Versiyon numarası
'reach 0.1';

// Interface (arayüz) tanımlarımız
const AdminInterface = {
    ucret: UInt,
    oyunuBitir: Fun([], Bool),
    tekilHamleKontrol: Fun([UInt], Null),
};

const OyuncuInterface = {
    //hamleYap: Fun([], Array(UInt, 10)),
    hamleYapTekil: Fun([], UInt),
    //hamleyiGor: Fun([Array(UInt, 10)], Null)
    hamleyiGorTekil: Fun([UInt],Null),
}

// Kontrat kodu
export const main = Reach.App(
    {},
    [
        Participant('Admin', AdminInterface),
        ParticipantClass('Oyuncu', OyuncuInterface)
    ],
    (Admin, Oyuncu) => {
        // Asıl mantık mekanizmamız
        // Admin başta fiyatı belirler
        Admin.only(() => {
            const ucret = declassify(interact.ucret);
        });
        Admin.publish(ucret);
        // Admin oyunu bitimini onaylamadığı sürece
        // Oyuncular hamle oynar ve ücretini öder
        var oyunBitmeli = false;
        invariant(balance() == 0 );
        while (!oyunBitmeli) {
            commit();
            fork()
                .case(
                    Admin,
                    (() => ({
                        when: declassify(interact.oyunuBitir())
                    })),
                    () => {
                        //oyunBitmeli = true;
                        continue;
                    }
                )
                .case(
                    Oyuncu,
                    (() => {
                        const hamle = declassify(interact.hamleYapTekil());
                        return ({
                            when: hamle != 0,
                            msg: hamle
                        });
                    }),
                    (hamle => ucret),
                    (hamle) => {
                        // Oyuncuların hamleyi görmesi, 
                        // ikincisi paranın admine verilmesi
                        Oyuncu.only(() => {
                            interact.hamleyiGorTekil(hamle);
                        });
                        Admin.only(()=>{
                            interact.tekilHamleKontrol(hamle);
                        });
                        transfer(ucret).to(Admin);
                        continue;
                    }
                )
                /*
                .case(
                    Oyuncu,
                    (() => {
                        const hamle = declassify(interact.hamleYap());
                        return ({
                            when: hamle != 0,
                            msg: hamle
                        });
                    }),
                    (hamle => ucret),
                    (hamle) => {
                        // Oyuncuların hamleyi görmesi, 
                        // ikincisi paranın admine verilmesi
                        Oyuncu.only(() => {
                            interact.hamleyiGor(hamle);
                        });
                        transfer(ucret).to(Admin);
                        continue;
                    }
                )*/
                .timeout(
                    1024, () => {
                        Admin.publish();
                        continue;
                    }
                );
        }
        commit();
        exit();
    }
);