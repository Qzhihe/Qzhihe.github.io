import React from "react";

import './index.scss';

const Page: React.FC<{}> = () => {
    return (
        <div className="page">
            <header></header>
            <main className="layout">
                <div className="left" id="aside">
                    <div className="author-info card-widget is-center">
                        <div className="avatar"><img src="/avatar.png" alt="avatar" /></div>
                        <div className="nickname author-info__data">Qzhihe</div>
                        <div className="description author-info__data">大雨时行</div>
                    </div>
                    <div className="card-widget"></div>
                    <div className="card-widget"></div>
                </div>
                
                <div className="right" id="posts">
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                </div>
            </main>
        </div>
    );
};

export default Page;