import React, {Component} from 'react';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick() {
        this.props.onMenuClick();
    }

    render() {
        return (
            <header>
                <span className="header__icon">
                    <svg className="menu__icon no--select" width="24px" height="24px" viewBox="0 0 48 48"
                         fill="#fff" onClick={this.onMenuClick}>
                        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/>
                    </svg>
                </span>

                <span className="header__title no--select">
                    Bytecom
                </span>
            </header>
        );
    }
}

export default Drawer;
