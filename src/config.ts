export type ConfigProps = {
    Sidebar_drawer: any;
    Customizer_drawer: boolean;
    mini_sidebar: boolean;
    setHorizontalLayout: boolean;
    setRTLLayout: boolean;
    actTheme: string;
    inputBg:string;
    boxed: boolean;
    setBorderCard: boolean;
    firebaseConfig: any;
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1dsDpZHNUx9C0mD5bHaya8sovs0MD16g",
    authDomain: "recruitdirect-5802a.firebaseapp.com",
    projectId: "recruitdirect-5802a",
    storageBucket: "recruitdirect-5802a.appspot.com",
    messagingSenderId: "772225269845",
    appId: "1:772225269845:web:b898ed2819b701efa654dc",
    measurementId: "G-27YMZ9JBMD"
};

const config: ConfigProps = {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, // Horizontal layout
    setRTLLayout: false, // RTL layout
    actTheme: 'BLUE_THEME',
    inputBg: 'BLUE_THEME',
    boxed: true,
    setBorderCard: false,
    firebaseConfig: firebaseConfig
};

export default config;
