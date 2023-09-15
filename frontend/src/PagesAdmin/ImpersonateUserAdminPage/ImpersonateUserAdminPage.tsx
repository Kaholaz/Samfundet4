import { useEffect, useState } from 'react';
import { EventDto, UserDto } from '~/dto';
import { getUser, getUsers, impersonateUser } from '~/api';
import styles from './ImpersonateUserAdminPage.module.scss';
import { Table } from '~/Components/Table';
import secretAgent from '~/assets/memes/secret-service.gif';
import bond1 from '~/assets/memes/bond1.gif';
import bond2 from '~/assets/memes/bond2.gif';
import bond3 from '~/assets/memes/bond3.gif';
import bondmusic from '~/assets/memes/jamesbond.mp3';
import { Icon } from '@iconify/react';
import { InputField } from '~/Components';
import { queryDto } from '~/utils';
import { useAuthContext } from '~/AuthContext';

export function ImpersonateUserAdminPage() {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [users, setUsers] = useState<UserDto[]>([]);
  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <b>You've been a bad bad boy</b>;
  }

  const displayUsers = queryDto(query, users, ['username', 'first_name', 'last_name', 'email']).slice(0, 10);

  function verboseUserName(user: UserDto): string {
    if ((user.first_name + user.last_name).length == 0) {
      return 'No name';
    }
    return `${user.first_name} ${user.last_name}`;
  }

  const auth = useAuthContext();
  function impersonate(user: UserDto) {
    impersonateUser(user)
      .then((ok) => {
        if (ok) {
          getUser()
            .then((user) => auth.setUser(user))
            .catch(console.error);
          alert('nice, middleware is good, TODO proper handling in frontend');
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            <span>Secret Agent Mode</span>
            <Icon icon="icons8:spy" inline={true} />
          </div>
          <audio controls autoPlay>
            <source src={bondmusic} type="audio/mp3" />
          </audio>
        </div>
        <div className={styles.agentBox}>
          <InputField<string> inputClassName={styles.inputClass} placeholder={'Search...'} onChange={setQuery} />
          <div className={styles.userList}>
            {displayUsers.map((u) => (
              <button className={styles.userItem} onClick={() => impersonate(u)}>
                <span>{verboseUserName(u)}</span>
                <span className={styles.email}>{u.email}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
