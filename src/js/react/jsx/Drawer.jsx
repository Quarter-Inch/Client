var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    componentWillMount: function(){

    },
    componentDidMount: function(){
        // DOM に追加されたとき
        var drawerEl = document.querySelector('.mdc-temporary-drawer');
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(drawerEl);
        document.querySelector('.demo-menu').addEventListener('click', function() {
            drawer.open = true;
        });
    },
    render: function() {
        return(
            <aside className="mdc-temporary-drawer">
                <nav className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                            Header here
                        </div>
                    </header>
                    <nav className="mdc-temporary-drawer__content mdc-list-group">
                        <div id="icon-with-text-demo" className="mdc-list">
                            <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>
                                Inbox
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>
                                Star
                            </a>
                            <a className="mdc-list-item" href="#">
                      <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
                    </a>
                            <a className="mdc-list-item" href="#">
                      <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
                    </a>
                        </div>
                        <hr className="mdc-list-divider" />
                        <div className="mdc-list">
                            <a className="mdc-list-item" href="#">
                      <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
                    </a>
                            <a className="mdc-list-item" href="#">
                      <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
                    </a>
                            <a className="mdc-list-item" href="#">
                      <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
                    </a>
                        </div>
                    </nav>
                </nav>
            </aside>
        );
    }
});