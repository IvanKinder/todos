import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import 'firebase/compat/database';

function Main() {
    const db = firebase.database();
    const data = db.ref('data');
    data.on('value', elem => console.log(elem.val()));
    // const test1 = db.ref('test1').push('rororo');
    // test1.on('value', el => console.log(el.val()));

    // console.log(db);
    // console.log(test);

    return (
        <div className="App">
            <div>
                <h1>Список заметок</h1>
            </div>
        </div>
    );
}

export default Main;
