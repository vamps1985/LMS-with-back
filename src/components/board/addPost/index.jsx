import React from 'react';
import './style.scss';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Addpost = () => (
  <div className="add-post board__add-post show">
  <div className="board__last-news">
                                <h3 className="board__text" id="sub_title">[ Создать объявление _]</h3>

                            </div>
                                <div className="add-post__theme">
                                    <label  className="add-post__label">Тема объявления:
                                        <input type="text" className="add-post__input" id="postTheme" placeholder=""/>
                                    </label>
                                </div>
                                <Editor
  // editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  // onEditorStateChange={this.onEditorStateChange}
/>
                                <div className="add-post__options option">
                                    <div className="option__whom">
                                        <label className="option__label">Сообщение для
                                            <select name="whom" id="whom_select" className="option__select">
                                                <option value="" className="option__options">FE 3</option>
                                                <option value="" className="option__options">FE Core</option>
                                                <option value="" className="option__options">PHP</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="option__date">
                                        <label  className="option__label">Прикрепить сверху до
                                            <input id="date" type="date" className="option__input"/>
                                        </label>
                                    </div>
                                    <button className="btn-post add-post__btn-post" id="send-post" type="submit" name="sub" value="sent">Отправить</button>
                                </div>











                            </div>
);

export default Addpost;
