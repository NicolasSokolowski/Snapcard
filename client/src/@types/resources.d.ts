interface Resources {
  auth: {
    accountCreation: "Account creation";
    accountDeletedConfirmationMsg: "Your account has been deleted. You will soon receive a confirmation email concerning this deletion. You are going to be disconnect in {{count}} s.";
    accountDeletion: "Account deletion";
    buttons: {
      "delete-user": "Delete my account";
      "edit-email": "Modify my email address";
      "edit-password": "Modify my password";
      "edit-username": "Modify my username";
      logout: "Logout";
      signin: "Sign in";
      signup: "Sign up";
    };
    code: "Please enter the code you received on your mail :";
    connection: "Connection";
    currentPassword: "Current password";
    deleteAccountCheck: "Do you really want to delete your account ?";
    email: "Email address";
    emailChangedConfirmationMsg: "Your email address has been modified. You will soon receive a confirmation email concerning this modification.";
    emailCol: "Email address :";
    emailModification: "Email modification";
    forgottenPassword: "Forgot password ?";
    hasAccount: "I already have an account";
    hasNoAccount: "I don't have an account";
    logoutCheck: "Do you really want to disconnect ?";
    myProfile: "My profile";
    newEmail: "New email address";
    newPassword: "New password";
    newUsername: "New username";
    password: "Password";
    passwordChangedConfirmationMsg: "Your password has been modified. You will soon receive a confirmation email concerning this modification. You can already use your new password to sign in !";
    passwordConfirmation: "Password confirmation";
    passwordModification: "Password modification";
    passwordReset: "Password reset";
    register: "Register";
    resetSuccess: "Success : A confirmation e-mail has been sent to you. You can already sign in with your new password.";
    success: "Success !";
    tos: "ToS and Privacy Policy";
    tosBox: "By checking this box, I accept the";
    username: "Username";
    usernameCol: "Username :";
  };
  card: {
    allCards: "All cards";
    backSide: "Back side";
    deleteCard: "Do you really want to delete this card ?";
    frontSide: "Front side";
    myCards: "My cards";
  };
  common: {
    aboutUs: "About us";
    create: "Create";
    delete: "Delete";
    language: "Language :";
    modify: "Modify";
    tos: "T&C";
  };
  deck: {
    deckDeleteNoCards: "Do you really want to delete this deck ?";
    deckDelete_one: "This will delete {{count}} card. Are you sure ?";
    deckDelete_other: "This will delete {{count}} cards. Are you sure ?";
    deckName: "Deck name";
    myDecks: "My decks";
  };
  errors: {
    ACCESS_DENIED: "Access denied";
    CREDENTIALS_ERROR: "Invalid Email or password";
    DATABASE_ERROR: "Error while trying to connect to the database";
    DUPLICATE_ENTRY: "{{label}} already exists";
    EMAIL_ALREADY_EXISTS: "Email address is already in use";
    EXPIRED_CODE: "Expired code";
    INVALID_CODE: "Invalid code";
    INVALID_CURRENT_PASSWORD: "Current password is incorrect";
    INVALID_DATA: "Invalid data";
    INVALID_PARAMETER: "Invalid parameter";
    NOT_FOUND: "Not found";
    PASSWORD_ERROR: "Internal error";
    UNAUTHORIZED: "Unauthorized";
    UNKNOWN: "Unknown error";
    VERIFICATION_CODE_SEND_FAILED: "Error while trying to send code";
    allFields: "All fields are required";
    back: "Back side";
    currentPassword: "Current password";
    email: "Email address";
    front: "Front side";
    name: "Name";
    newEmail: "New email";
    newPassword: "New password";
    password: "Password";
    passwordConfirmation: "Password confirmation";
    passwordMisMatch: "Passwords doesn't match";
    tosNotChecked: "You must accept the ToS and Privacy Policy";
    username: "Username";
    validation: {
      "any.only": "New password and it's confirmation are different";
      "any.required": "{{label}} is required";
      empty: "{{label}} cannot be empty";
      noChange: "{{label}} is identical to its current value";
      "string.email": "{{label}} must be a valid email address";
      "string.empty": "{{label}} cannot be empty";
      "string.max": "{{label}} must be at most {{limit}} characters long";
      "string.min": "{{label}} must be at least {{limit}} characters long";
      "string.passwordComplexity": "{{label}} must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
      "string.pattern.base": "{{label}} does not match the required format";
    };
  };
  home: {
    hero: {
      subtitle: "Study smarter. Remember longer. Build your own flashcard decks in seconds and practice at your own pace. Each session challenges you to recall what’s on the back of a card—then our smart system adapts the difficulty automatically. Quickly see what you’ve mastered and what still needs work, so you can focus on what matters most. Designed to make your progress clear, effective, and lasting—whether you’re preparing for exams, learning a new language, or mastering knowledge for life.";
    };
  };
  tos: {
    contact: {
      line1: "For any questions regarding your personal data or the application of these Terms of Use, please contact us at: contact@playsnapcard.com";
      subtitle: "13. Contact";
    };
    cookies: {
      line1: "We use two cookies strictly necessary for the operation of the service:";
      line2: "• Access cookie (access token): secures your session and verifies your identity.";
      line3: "• Refresh cookie (refresh token): keeps you logged in without frequent reauthentication.";
      line4: "These cookies do not contain sensitive data (such as passwords) but only technical identifiers necessary for security.";
      line5: "Lifetime:";
      line6: "• Access cookie: 1 day";
      line7: "• Refresh cookie: 7 days";
      line8: "As these cookies are essential for the operation of the site, they do not require prior consent.";
      subtitle: "4. Cookies";
    };
    data: {
      line1: "We only collect:";
      line2: "• Email address upon registration, for the newsletter or via the contact form.";
      line3: "• Functional cookies (access token and refresh token) to secure access and manage your account.";
      line4: "• LocalStorage: only your email address, to maintain the session and facilitate access to your account.";
      subtitle: "2. Data Collected";
    };
    dataController: {
      line1: "• The data controller is: Sokolowski Nicolas";
      line2: "• Email: contact@playsnapcard.com";
      line3: "• Address:";
      subtitle: "11. Data Controller";
    };
    dataRetention: {
      line1: "• Functional emails: stored for as long as necessary to manage your account or requests.";
      line2: "• Newsletter: stored while you are subscribed and until you unsubscribe.";
      line3: "• LocalStorage: stored as long as the session is active or until deleted by the user.";
      subtitle: "5. Data Retention";
    };
    hosting: {
      line1: "The website is hosted by: OVH";
      line2: "Data is exclusively stored in Germany.";
      subtitle: "12. Hosting";
    };
    legalBasis: {
      line1: "The processing of your data is based on:";
      line2: "• Your consent (e.g., subscription to the newsletter)";
      line3: "• Or the performance of a contract and legitimate interest (account management, secure authentication, operation of the site)";
      subtitle: "9. Legal Basis";
    };
    minors: {
      line1: "The website is intended for users aged 15 and over.";
      line2: "Users under the age of 15 must obtain the authorization of their legal representative or use the service within an educational setting, under the responsibility of their institution.";
      subtitle: "7. Use by Minors";
    };
    policyUpdates: {
      line1: "This policy may be modified at any time.";
      line2: "In the event of a substantial change, users will be notified by email or via a notification on the site.";
      subtitle: "10. Policy Updates";
    };
    purpose: {
      line1: "These terms define the use of the website playsnapcard.com and the rights and obligations of users regarding their personal data.";
      subtitle: "1. Purpose";
    };
    purposeEmailAndData: {
      line1: "Functional emails / essential notifications:";
      line10: "Email delivery: Emails are sent via Google’s SMTP service (Gmail).";
      line11: "No personal data is shared with third parties, except where required by law.";
      line2: "• Modification of your rights on the website";
      line3: "• Important alerts related to your account";
      line4: "→ These emails are necessary for the operation of the service and do not require additional consent.";
      line5: "• Marketing emails / newsletter: To receive the newsletter or commercial information, your explicit consent is required via a checkbox upon registration.";
      line6: "You may unsubscribe at any time through a link in each email.";
      line7: "• Cookies: used only for authentication and account security.";
      line8: "• LocalStorage: temporarily stores your email to maintain the session and facilitate account access.";
      line9: "These data are necessary for the operation of the service and do not require additional consent.";
      subtitle: "3. Purpose of Emails and Data";
    };
    security: {
      line1: "• Secure cookies and LocalStorage for authentication";
      line2: "• Data access limited to authorized personnel";
      line3: "• Data transmission via HTTPS";
      line4: "• Sensitive data (passwords) are never stored in plain text, neither on the client side nor on the server side";
      subtitle: "8. Security";
    };
    title: "Terms of Service (ToS) and Privacy Policy";
    userRights: {
      line1: "You may at any time:";
      line2: "• Access your data";
      line3: "• Modify your personal data";
      line4: "• Delete your account and your data";
      line5: "• Request portability of your data: export of your email address";
      line6: "• Object to or restrict processing: only applicable for marketing emails";
      line7: "These actions can be carried out via the features available in your account.";
      line8: "If you delete your account, all your personal data will be immediately removed from our systems, except for any data we may need to retain to comply with legal obligations (e.g., billing or security).";
      line9: "If you encounter a problem or prefer manual processing, please contact us at: contact@playsnapcard.com";
      subtitle: "6. User Rights";
    };
  };
  training: {
    buttons: {
      quit: "Quit";
      replay: "Replay";
    };
    cardsLeftCount_one: "One card left";
    cardsLeftCount_other: "Cards left : {{count}}";
    chooseDeck: "Choose a deck";
    dailyCards: "Daily cards";
    dailyCardsCount_one: "{{count}} card left";
    dailyCardsCount_other: "{{count}} cards left";
    difficultCards: "Difficult cards";
    difficultCardsCount_one: "{{count}} card";
    difficultCardsCount_other: "{{count}} cards";
    emptyDeck: "Empty deck";
    finished: "Finished !";
    noDecks: "No decks";
    scoreBoard: {
      easyCards: "Number of easy cards :";
      hardCards: "Number of difficult cards :";
      mediumCards: "Number of medium cards :";
      newCards: "Number of new cards :";
      scoreBoard: "Score board";
      studiedCards: "Number of cards studied :";
      successRate: "Success rate :";
      winningStreakCards: "Number of cards in a winning streak :";
    };
    selectDeck: "Select a deck";
    training: "Training";
  };
}

export default Resources;
