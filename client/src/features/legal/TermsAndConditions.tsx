import { useAppSelector } from "../../store/hooks";
import NavBar from "../../ui/NavBar";

function TermsAndConditions() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="flex flex-col font-patua text-textPrimary sm:flex-row">
      {user && (
        <div className="sticky top-0 z-10 flex h-10 w-full justify-center rounded-sm bg-tertiary shadow-right sm:z-50 sm:h-screen-dvh sm:w-72 sm:max-w-80 md:w-80 ">
          <NavBar />
        </div>
      )}
      <div className="flex w-full flex-col sm:flex-row">
        <div className="flex w-full justify-center sm:mt-5">
          <div className="flex w-full flex-col items-center sm:gap-12">
            <div className="flex h-48 items-center">
              <img
                src="/images/card.png"
                alt="Snapcard Logo"
                className="h-28 object-contain sm:h-36 lg:h-48 xl:h-56"
                draggable={false}
              />
              <h1 className="flex -translate-x-4 justify-center font-patua text-4xl text-tertiary sm:text-5xl lg:text-7xl xl:text-8xl">
                Snapcard
              </h1>
            </div>
            <div className="scrollbar-hide flex justify-center">
              <section className="mx-5 mb-12 overflow-y-auto rounded-md bg-tertiary pb-10 shadow-lg sm:mb-24 sm:w-3/5">
                <h2 className="m-8 mb-20 text-center text-xl sm:text-3xl">
                  Conditions Générales d’Utilisation (CGU) et Politique de
                  Confidentialité
                </h2>
                <div className="mx-10 flex flex-col gap-10">
                  <div>
                    <p className="text-lg font-bold sm:text-xl">1. Objet</p>
                    <div className="mt-4 text-sm sm:mt-5 sm:text-base">
                      Les présentes conditions définissent l’utilisation du site
                      playsnapcard.com et les droits et obligations des
                      utilisateurs concernant leurs données personnelles.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      2. Données collectées
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Nous collectons uniquement :
                      <br />
                      <br />
                      • Adresse email lors de l’inscription, pour la newsletter
                      ou via le formulaire de contact.
                      <br />
                      • Cookies fonctionnels (access token et refresh token)
                      pour sécuriser l’accès et gérer votre compte.
                      <br />• LocalStorage : uniquement votre adresse email pour
                      maintenir la session et faciliter l’accès à votre compte.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      3. Finalité des emails et données
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Emails fonctionnels / notifications essentielles :
                      <br />
                      <br />
                      • Modification de vos droits sur le site
                      <br />
                      • Alertes importantes liées à votre compte
                      <br />→ Ces emails sont nécessaires au fonctionnement du
                      service et ne nécessitent pas de consentement
                      supplémentaire.
                      <br />
                      • Emails marketing / newsletter : Pour recevoir la
                      newsletter ou des informations commerciales, votre
                      consentement explicite est requis via une case à cocher
                      lors de l’inscription. Vous pouvez vous désinscrire à tout
                      moment via un lien dans chaque email.
                      <br />
                      • Cookies utilisés uniquement pour l’authentification et
                      la sécurité de votre compte
                      <br />
                      • LocalStorage stockant temporairement l’email pour
                      maintenir la session et faciliter l’accès au compte
                      <br />- Ces données sont nécessaires au fonctionnement du
                      service et ne nécessitent pas de consentement
                      supplémentaire.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      4. Cookies
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Nous utilisons deux cookies strictement nécessaires au
                      fonctionnement du service :
                      <br />
                      <br />
                      • Cookie d’accès (access token) : permet de sécuriser
                      votre session et de vérifier votre identité.
                      <br />
                      • Cookie de rafraîchissement (refresh token) : permet de
                      maintenir votre connexion sans avoir à vous réauthentifier
                      fréquemment.
                      <br />
                      <br />
                      Ces cookies ne contiennent pas de données sensibles (comme
                      vos mots de passe), mais uniquement des identifiants
                      techniques nécessaires à la sécurité.
                      <br />
                      <br />
                      • Durée de vie :
                      <br />
                      <br />
                      - Cookie d’accès : 1 jour
                      <br />
                      - Cookie de rafraîchissement : 7 jours
                      <br />
                      <br />
                      Ces cookies étant indispensables au fonctionnement du
                      site, ils ne nécessitent pas de consentement préalable.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      5. Durée de conservation
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      • Emails fonctionnels : conservés le temps nécessaire à la
                      gestion de votre compte ou de vos demandes.
                      <br />
                      • Newsletter : conservés tant que vous êtes inscrit et
                      jusqu’à désinscription.
                      <br />
                      • Cookies fonctionnels : expirent automatiquement après 1
                      jour.
                      <br />• LocalStorage : conservés tant que la session est
                      active ou jusqu’à suppression par l’utilisateur.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      6. Droits des utilisateurs
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Vous pouvez à tout moment :
                      <br />
                      <br />
                      • Accéder à vos données
                      <br />
                      • Modifier vos données personnelles
                      <br />
                      • Supprimer votre compte et vos données
                      <br />
                      <p className="mt-5 text-sm sm:text-base">
                        Ces actions peuvent se faire via les fonctionnalités
                        mises à disposition dans votre compte.
                        <br />
                        En cas de suppression de votre compte, toutes vos
                        données personnelles sont immédiatement supprimées de
                        nos systèmes, à l’exception de celles que nous devons
                        éventuellement conserver pour respecter des obligations
                        légales (par exemple facturation ou sécurité).
                        <br />
                        <br />
                        Si vous rencontrez un problème ou préférez un traitement
                        manuel, contactez-nous à : contact@playsnapcard.com.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      7. Sécurité
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      • Cookie sécurisé et localStorage pour authentification
                      <br />
                      • Accès aux données limité aux personnes autorisées
                      <br />
                      • Transmission des données via HTTPS
                      <br />
                      <p className="mt-5 text-sm sm:text-base">
                        Les données sensibles (mots de passe) ne sont jamais
                        stockées en clair, ni côté client ni côté serveur
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      8. Base légale
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Le traitement de vos données repose :
                      <br />
                      <br />
                      • sur votre consentement (par exemple inscription à la
                      newsletter),
                      <br />• ou sur l’exécution du contrat et l’intérêt
                      légitime (gestion de votre compte, authentification
                      sécurisée, fonctionnement du site).
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      9. Contact
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Pour toute question sur vos données personnelles ou
                      l’application de ces CGU, contactez-nous à :
                      contact@playsnapcard.com.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
