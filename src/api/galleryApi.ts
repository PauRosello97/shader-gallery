import firebase from 'firebase';
import Shader from '../models/Shader';

const firebaseConfig = {
    apiKey: "AIzaSyCTOkZ0KSdIFKrMhusmWs_mU75prCVndr4",
    authDomain: "shader-gallery.firebaseapp.com",
    projectId: "shader-gallery",
    storageBucket: "shader-gallery.appspot.com",
    messagingSenderId: "261675778647",
    appId: "1:261675778647:web:a200e7221c07a7a868d912"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage().ref();

export class GalleryApi {

    constructor() { }

    async getShaders(): Promise<Shader[]> {
        let shaders: Shader[] = [];
        await db.collection("shaders").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                let user: Shader = {
                    id: doc.id,
                    title: data.title,
                    code: data.code
                }
                shaders.push(user);
            });
        });
        console.log(shaders);
        return shaders;
    }
}
export default new GalleryApi();