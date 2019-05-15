import React, { Fragment } from 'react';
// import styles from './form.module.sass';
import styles from './form.css';
import stylesSass from './form.module.sass';

import contactConstants from '../../../../core/constants/contactSchema';
import categoryConstants from '../../../../core/constants/categorySchema';
import Avatar from './../../../common/Avatar';

const {
  NAME,
  SURNAME,
  DESCRIPTION,
  PHONE,
  EMAIL,
  BIRTHDAY,
  FACEBOOK,
  INSTAGRAM,
  CATEGORY,
} = contactConstants;

const avatarStyles = { avatarWrap: stylesSass.avatarWrap, avatar: stylesSass.avatar };

const { TEXT, ID } = categoryConstants;
const newContact = { [NAME]: 'new', [SURNAME]: 'contact' };

export default function Contact(props) {
  console.log(props, 'FORM VIEW PROPS');
  return (
    <div className="add-contact__form-wrap">
      <div className="add-contact__form">
        <form
          className="add-form"
          /*  method="POST" */ name="addContactForm"
          onSubmit={props.submitHandler}
        >
          <div className="flex-1">
            <Avatar contact={newContact} styles={avatarStyles} />

            <div className="add-contact__fullname-wrap">
              <div className="flex-2">
                <div className="input-name-inner">
                  <label className="field-add field-name">Name</label>
                  <input
                    className="input-add input-name"
                    type="text"
                    value={props.values && props.values[NAME]}
                    name={NAME}
                    // required="required"
                    onChange={props.changeHandler}
                  />
                </div>
                <div className="input-surname-inner">
                  <label className="field-add field-surname">Surname</label>
                  <input
                    className="input-add input-surname"
                    type="text"
                    value={props.values && props.values[SURNAME]}
                    name={SURNAME}
                    onChange={props.changeHandler}
                  />
                </div>
              </div>
              <div className="input-descript-inner">
                <label className="field-add field-descript">Description</label>
                <textarea
                  className="input-add input-descript"
                  value={props.values && props.values[DESCRIPTION]}
                  name={DESCRIPTION}
                  onChange={props.changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="flex-3">
            <div className="input-phone-inner input-inner">
              <label>Phone</label>
              <input
                className="input-add input-phone"
                type="phone"
                value={props.values && props.values[PHONE]}
                name={PHONE}
                onChange={props.changeHandler}
              />
            </div>
            <div className="input-email-inner input-inner">
              <label>Email</label>
              <input
                className="input-add input-email"
                type="email"
                value={props.values && props.values[EMAIL]}
                name={EMAIL}
                onChange={props.changeHandler}
              />
            </div>
            <div className="input-bday-inner input-inner">
              <label>Birthday</label>
              <input
                className="input-add input-bday"
                type="date"
                value={props.values && props.values[BIRTHDAY]}
                name={BIRTHDAY}
                onChange={props.changeHandler}
              />
            </div>

            <div className="input-fb-acc-inner input-inner">
              <label>Facebook</label>
              <input
                className="input-add input-fb-acc"
                type="text"
                value={props.values && props.values[FACEBOOK]}
                name={FACEBOOK}
                onChange={props.changeHandler}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Instagram</label>
              <input
                className="input-add input-instg-acc"
                type="text"
                value={props.values && props.values[INSTAGRAM]}
                name={INSTAGRAM}
                onChange={props.changeHandler}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Category</label>
              <select
                className="input-add input-category"
                // type="select"
                name={CATEGORY}
                onChange={props.selectHandler}
              >
                {props.categories &&
                  props.categories.map(category => {
                    let selected = false;

                    if (
                      props.values[CATEGORY] &&
                      category[ID].toString() === props.values[CATEGORY].toString()
                    )
                      selected = true;
                    return (
                      <option selected={selected} dataid={category[ID]}>
                        {category[TEXT]}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="save-controls-wrap">
            <div className="save-controls-inner">
              <div className="save-controls__btns">
                <button
                  onClick={props.submitHandler}
                  className="btn btn__save btn--theme-f"
                  type="submit"
                >
                  save
                </button>
                <button
                  onClick={props.cancelHandler}
                  className="btn btn__cancel btn--theme-e"
                  type="button"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
