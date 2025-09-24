import { Link } from "react-router-dom";
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
      <div className="relative flex w-full flex-col sm:flex-row">
        {!user && (
          <Link to="/">
            <img
              src="/images/home.png"
              alt="Home logo"
              className="absolute right-4 top-4 h-10 sm:right-5 sm:top-5 sm:h-12"
            />
          </Link>
        )}
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
                      2. Responsable du traitement
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      • Le responsable du traitement des données est : Nicolas
                      Sokolowski
                      <br />
                      • Email : contact@playsnapcard.com
                      <br />
                      • Adresse :
                      <br />
                      <br />
                      15 rue Paul Sabatier 77176
                      <br />
                      Savigny-le-Temple
                      <br />
                      FRANCE
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      3. Hébergement
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Le site est hébergé par : OVH
                      <br />
                      Les données sont exclusivement stockées en Allemagne.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      4. Données collectées
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
                      5. Finalité des emails et données
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
                      <br />• Ces données sont nécessaires au fonctionnement du
                      service et ne nécessitent pas de consentement
                      supplémentaire.
                      <br />• Envoi des emails : L’envoi des emails est assuré
                      via le service SMTP de Google (Gmail).
                      <br />
                      <br />
                      Aucune donnée personnelle n’est transmise à des tiers,
                      sauf si la loi l’exige.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      6. Cookies
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
                      7. Durée de conservation
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      • Emails fonctionnels : conservés le temps nécessaire à la
                      gestion de votre compte ou de vos demandes.
                      <br />
                      • Newsletter : conservés tant que vous êtes inscrit et
                      jusqu’à désinscription.
                      <br />
                      <br />• LocalStorage : conservés tant que la session est
                      active ou jusqu’à suppression par l’utilisateur.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      8. Droits des utilisateurs
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
                      • Demander la portabilité de vos données : export de votre
                      adresse e-mail
                      <br />
                      • Opposition/limitation : uniquement possible pour les
                      emails marketing
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
                      9. Utilisation par des mineurs
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      Le site est destiné à un public âgé de 15 ans et plus.
                      <br />
                      Les utilisateurs mineurs de moins de 15 ans doivent
                      obtenir l’autorisation de leur représentant légal ou
                      utiliser le service dans le cadre scolaire, sous la
                      responsabilité de l’établissement.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      10. Sécurité
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      • Cookie sécurisé et localStorage pour authentification
                      <br />
                      • Accès aux données limité aux personnes autorisées
                      <br />
                      • Transmission des données via HTTPS
                      <br />• Les données sensibles (mots de passe) ne sont
                      stockées en clair, ni côté client ni côté serveur
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      11. Base légale
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
                      12. Mise à jour de la politique
                    </div>
                    <div className="mt-5 text-sm sm:text-base">
                      La présente politique peut être modifiée à tout moment.
                      <br />
                      En cas de changement substantiel, les utilisateurs seront
                      notifiés par email ou via une notification sur le site.
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold sm:text-xl">
                      13. Contact
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
