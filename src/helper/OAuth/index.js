const google = props => {
  //HTML: <script src="https://apis.google.com/js/api.js"></script>

  const gapiStart = props => {
    window.gapi.client
      .init({
        apiKey: 'AIzaSyAa_ShFv8wQvt4JJfSTjOVwEofSLwxaLIc',
        clientId: '77424506589-l5l6us76mdk5460ul6ishptk5f4obaae.apps.googleusercontent.com',
        scope: 'profile',
      })
      .then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();

        const status = GoogleAuth.isSignedIn.get();
        const user = {
          name: GoogleAuth.currentUser.get().nt?.Re,
          img: GoogleAuth.currentUser.get().nt?.oK,
          id: GoogleAuth.currentUser.get().nt?.uT,
        };
        props.GoogleSignCheckCreator(status, user);

        //Log Status Listener
        GoogleAuth.isSignedIn.listen(() => {
          props.GoogleSignCheckCreator(GoogleAuth.isSignedIn.get(), {
            name: GoogleAuth.currentUser.get().nt?.Re,
            img: GoogleAuth.currentUser.get().nt?.oK,
            id: GoogleAuth.currentUser.get().nt?.uT,
          });
        });
      });
  };

  window.gapi.load('client', () => {
    gapiStart(props);
  });
};

const Fb = props => {
  //HTML: <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

  const fbLogInDataToStore = () => {
    window.FB.api(
      '/me',
      {
        fields: 'id,name,picture',
      },
      response => {
        props.FbSignCheckCreator('connected', {
          name: response.name,
          img: response.picture?.data.url,
          id: response.id,
        });
      }
    );
  };

  const FbStart = props => {
    //FB init
    window.FB.init({
      appId: '302613994745277',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v12.0',
    });

    //First check login or not (render btn)
    window.FB.getLoginStatus(response => {
      // response:{ authResponse: null, status: "unknown" }
      if (response.status === 'connected') {
        fbLogInDataToStore();
      }
    });

    //FB log status Change Event Listener
    window.FB.Event.subscribe('auth.authResponseChange', response => {
      if (response.status === 'connected') {
        fbLogInDataToStore();
      }

      if (response.status === 'unknown') {
        props.FbSignCheckCreator(false, null);
      }
    });
  };

  window.fbAsyncInit = () => {
    FbStart(props);
  };
};

export default { google, Fb };
