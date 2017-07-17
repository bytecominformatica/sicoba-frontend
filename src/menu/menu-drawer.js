import React, {Component} from 'react';
import logo from '../images/logo.png';
import logoNegativa from '../images/logo-negative.png';
import sidebarBackground from '../images/sidebar-background.jpg';
import MenuItem from './menu-item';
import Submenu from './submenu';
import menuData from './menu.json'

class MenuDrawer extends Component {

    constructor(props) {
        super(props);
        this.createMenu = this.createMenu.bind(this);
        this.createSubmenu = this.createSubmenu.bind(this);
        this.createMenuList = this.createMenuList.bind(this);
    }

    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: false});
    }

    render() {
        let menuList = this.createMenuList(menuData);
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                            <div className="background center">
                                <img src={sidebarBackground}/>
                            </div>
                            <a href="#!user"><img className="circle background-white" src={logo} width="20px"/></a>
                            <a href="#!name"><span className="white-text name">Bytecom Informática</span></a>
                            <a href="#!email"><span
                                className="white-text email">sac@bytecominformatica.com.br</span></a>
                        </div>
                    </li>
                    {menuList}
                    {/*<Submenu identifier="comerical" name="Comercial" menuList={[*/}
                        {/*<MenuItem key="1" name="Clientes" href="#clientes" icon="supervisor_account"/>,*/}
                        {/*<MenuItem key="2" name="Planos" href="#planos" icon="supervisor_account"/>*/}
                    {/*]}/>*/}
                    {/*<Submenu identifier="financeiro" name="Financeiro" menuList={[*/}
                        {/*<MenuItem key="1" name="Enviar Retorno" href="#retorno" icon="supervisor_account"/>,*/}
                        {/*<MenuItem key="2" name="Cedentes" href="#cedentes" icon="supervisor_account"/>,*/}
                        {/*<MenuItem key="3" name="Contas Gerencianet" href="#gerencianet/accounts"*/}
                                  {/*icon="supervisor_account"/>,*/}
                        {/*<MenuItem key="4" name="Relatório Títulos" href="#titulos/report" icon="supervisor_account"/>,*/}
                        {/*<MenuItem key="5" name="Relatório Cobranças" href="#charges/report" icon="supervisor_account"/>*/}
                    {/*]}/>*/}
                    {/*<li>*/}
                        {/*<div className="divider"></div>*/}
                    {/*</li>*/}
                    {/*<MenuItem name="Sugestões e Melhorias" href="https://github.com/bytecominformatica/sicoba/issues"/>*/}

                </ul>

                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center">
                            Bytecom
                        </a>
                        <a href="#" data-activates="slide-out" className="button-collapse show-on-medium-and-up">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }

    createMenuList(menuList, parentKey) {
        return menuList.map((menu, index) => {
            let key = parentKey ? parentKey + '-' + index : index;
            if (menu.itens) {
                return this.createSubmenu(key, menu);
            } else {
                return this.createMenu(key, menu);
            }
        });
    }

    createMenu(key, menu) {
        return <MenuItem key={key} name={menu.name} href={menu.url} icon={menu.icon} target={menu.target}/>;
    }

    createSubmenu(key, submenu) {
        let menuList = this.createMenuList(submenu.itens, key);
        return <Submenu key={key} name={submenu.name} menuList={menuList}/>;
    }

}

export default MenuDrawer;
