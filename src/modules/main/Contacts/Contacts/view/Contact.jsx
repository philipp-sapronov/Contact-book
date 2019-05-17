import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './contact.module.sass';
import gridStyles from '../../../Grid/view/grid.module.sass';
import constants from '../../../../../constants/contactSchema';
import DotsMenu from '../../../../common/DotsMenu';
import Avatar from '../../../../common/Avatar';

const { ContactBtn } = DotsMenu;
const avatarStyles = { avatarWrap: styles.avatarWrap, letters: styles.letters };

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

export default function Contact(props) {
  if (!props.contact) return null;

  const itemClass = classNames({
    [gridStyles.item]: true,
    [styles.item]: true,
  });

  const { contact } = props;

  return (
    <div className={itemClass} key={contact[constants.ID]}>
      <div className={styles.inner}>
        <NavLink exact to={`/contacts/${contact[constants.ID]}`}>
          <Avatar contact={contact} styles={avatarStyles} />
          <div className={styles.nameWrap}>
            <p className={styles.name}>
              {getFullName(contact[constants.NAME], contact[constants.SURNAME])}
            </p>
            <p className={styles.descript}>{contact[constants.PHONE]}</p>
          </div>
        </NavLink>
        <ContactBtn triggerId={contact[constants.ID]} module="contact" />
      </div>
    </div>
  );
}