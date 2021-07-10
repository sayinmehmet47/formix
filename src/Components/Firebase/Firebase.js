import React, { useEffect, useState } from 'react';
import db, { auth } from '../../firebase';
import { Login } from '../Login/Login';

export const Firebase = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    db.collection('things').onSnapshot((snapshot) =>
      setPerson(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
  }, []);

  const add = (e) => {
    e.preventDefault();
    db.collection('things').add({
      name: name,
      surname: surname,
    });
    setName('');
    setSurname('');
  };

  const del = (id) => {
    db.collection('things').doc(id).delete();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName} hosgeldin</p>
          <form>
            <div>
              <label htmlFor="">isim</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </div>
            <label htmlFor="">Soyisim</label>

            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
            />
            <button onClick={add}>Ekle</button>
          </form>

          <button onClick={() => auth.signOut()}>Cikis yap</button>

          {persons.map((person) =>
            person.data.name ? (
              <div style={{ display: 'flex' }}>
                <p>{person.data.name}</p>
                <button onClick={() => del(person.id)}>delete</button>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};
