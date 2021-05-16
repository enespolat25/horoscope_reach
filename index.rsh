'reach 0.1';

const AdminInterface = {
    ucret: UInt,
    oyunuBitir: Fun([], Bool),
    tekilHamleKontrol: Fun([UInt], Null),
};

const OyuncuInterface = {
    hamleYapTekil: Fun([], UInt),
    hamleyiGorTekil: Fun([UInt],Null),
}

export const main = Reach.App(
    {},
    [
        Participant('Admin', AdminInterface),
        ParticipantClass('Oyuncu', OyuncuInterface)
    ],
    (Admin, Oyuncu) => {
        Admin.only(() => {
            const ucret = declassify(interact.ucret);
        });
        Admin.publish(ucret);
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
                        oyunBitmeli = true;
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