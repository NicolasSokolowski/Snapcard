import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import NavBar from "../../ui/NavBar";
import { useTranslation } from "react-i18next";

function TermsAndConditions() {
  const user = useAppSelector((state) => state.user.user);
  const { t } = useTranslation("tos");

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
              <div className="mx-5 mb-12 overflow-y-auto rounded-md bg-tertiary pb-10 shadow-lg sm:mb-24 sm:w-3/5">
                <h2 className="m-8 mb-20 text-center text-xl sm:text-3xl">
                  {t("title")}
                </h2>
                <div className="mx-10 flex flex-col gap-10">
                  <section aria-labelledby="purpose">
                    <h3 id="purpose" className="text-lg font-bold sm:text-xl">
                      {t("purpose.subtitle")}
                    </h3>
                    <div className="mt-4 text-sm sm:mt-5 sm:text-base">
                      {t("purpose.line1")}
                    </div>
                  </section>
                  <section aria-labelledby="data">
                    <h3 id="data" className="text-lg font-bold sm:text-xl">
                      {t("data.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p>{t("data.line1")}</p>
                      <ol className="mt-5">
                        <li>{t("data.line2")}</li>
                        <li>{t("data.line3")}</li>
                        <li>{t("data.line4")}</li>
                      </ol>
                    </div>
                  </section>
                  <section aria-labelledby="purpose-email-and-data">
                    <h3
                      id="purpose-email-and-data"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("purposeEmailAndData.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p>{t("purposeEmailAndData.line1")}</p>
                      <ol className="my-5">
                        <li>{t("purposeEmailAndData.line2")}</li>
                        <li>
                          <span>{t("purposeEmailAndData.line3")}</span>
                          <span>{t("purposeEmailAndData.line4")}</span>
                        </li>
                        <li>{t("purposeEmailAndData.line5")}</li>
                        <li>{t("purposeEmailAndData.line6")}</li>
                        <li>{t("purposeEmailAndData.line7")}</li>
                        <li>{t("purposeEmailAndData.line8")}</li>
                      </ol>
                      <p className="my-5">{t("purposeEmailAndData.line9")}</p>
                      <p className="my-5">{t("purposeEmailAndData.line10")}</p>
                      <p>{t("purposeEmailAndData.line11")}</p>
                    </div>
                  </section>
                  <section aria-labelledby="cookies">
                    <h3 id="cookies" className="text-lg font-bold sm:text-xl">
                      {t("cookies.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p className="mb-5">{t("cookies.line1")}</p>
                      <ol>
                        <li>{t("cookies.line2")}</li>
                        <li>{t("cookies.line3")}</li>
                      </ol>
                      <p className="mt-5">{t("cookies.line4")}</p>
                      <p className="my-5">{t("cookies.line5")}</p>
                      <ol>
                        <li>{t("cookies.line6")}</li>
                        <li>{t("cookies.line7")}</li>
                      </ol>
                      <p className="mt-5">{t("cookies.line8")}</p>
                    </div>
                  </section>
                  <section aria-labelledby="data-retention">
                    <h3
                      id="data-retention"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("dataRetention.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <ol>
                        <li>{t("dataRetention.line1")}</li>
                        <li>{t("dataRetention.line2")}</li>
                        <li>{t("dataRetention.line3")}</li>
                      </ol>
                    </div>
                  </section>
                  <section aria-labelledby="user-rights">
                    <h3
                      id="user-rights"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("userRights.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p className="mb-5">{t("userRights.line1")}</p>
                      <ol>
                        <li>{t("userRights.line2")}</li>
                        <li>{t("userRights.line3")}</li>
                        <li>{t("userRights.line4")}</li>
                        <li>{t("userRights.line5")}</li>
                        <li>{t("userRights.line6")}</li>
                      </ol>
                      <p className="mt-5 text-sm sm:text-base">
                        {t("userRights.line7")}
                      </p>
                      <p className="mt-5 text-sm sm:text-base">
                        {t("userRights.line8")}
                      </p>
                      <p className="mt-5 text-sm sm:text-base">
                        {t("userRights.line9")}
                      </p>
                    </div>
                  </section>
                  <section aria-labelledby="minors">
                    <h3 id="minors" className="text-lg font-bold sm:text-xl">
                      {t("minors.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p className="mb-5">{t("minors.line1")}</p>
                      <p>{t("minors.line2")}</p>
                    </div>
                  </section>
                  <section aria-labelledby="security">
                    <h3 id="security" className="text-lg font-bold sm:text-xl">
                      {t("security.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <ol>
                        <li>{t("security.line1")}</li>
                        <li>{t("security.line2")}</li>
                        <li>{t("security.line3")}</li>
                        <li>{t("security.line4")}</li>
                      </ol>
                    </div>
                  </section>
                  <section aria-labelledby="legal-basis">
                    <h3
                      id="legal-basis"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("legalBasis.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p className="mb-5">{t("legalBasis.line1")}</p>
                      <ol>
                        <li>{t("legalBasis.line2")}</li>
                        <li>{t("legalBasis.line3")}</li>
                      </ol>
                    </div>
                  </section>
                  <section aria-labelledby="policy-updates">
                    <h3
                      id="policy-updates"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("policyUpdates.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p>{t("policyUpdates.line1")}</p>
                      <p>{t("policyUpdates.line2")}</p>
                    </div>
                  </section>
                  <section aria-labelledby="data-control">
                    <h3
                      id="data-control"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("dataController.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <ol>
                        <li>{t("dataController.line1")}</li>
                        <li>{t("dataController.line2")}</li>
                        <li>{t("dataController.line3")}</li>
                      </ol>
                      <div className="mt-5">
                        <p>15 RUE PAUL SABATIER</p>
                        <p>77176 SAVIGNY-LE-TEMPLE</p>
                        <p>FRANCE</p>
                      </div>
                    </div>
                  </section>
                  <section aria-labelledby="data-hosting">
                    <h3
                      id="data-hosting"
                      className="text-lg font-bold sm:text-xl"
                    >
                      {t("hosting.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      <p>{t("hosting.line1")}</p>
                      <p>{t("hosting.line2")}</p>
                    </div>
                  </section>
                  <section aria-labelledby="contact">
                    <h3 id="contact" className="text-lg font-bold sm:text-xl">
                      {t("contact.subtitle")}
                    </h3>
                    <div className="mt-5 text-sm sm:text-base">
                      {t("contact.line1")}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
