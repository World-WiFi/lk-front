import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import routes from '../../routes';
import {connect} from "react-redux";

import t from '../../modules/base/components/multilang/MultiLang/MultiLangT'

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
    const paths = ['/'];

    if (pathname === '/') return paths;

    pathname.split('/').reduce((prev, curr, index) => {
        const currPath = `${prev}/${curr}`;
        paths.push(currPath);
        return currPath;
    });
    return paths;
};


/*
const Breadcrumbs = ({...rest, location: {pathname}, match}) => {
    const paths = getPaths(pathname);
    const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem}/>);



    return (
        <Breadcrumb>
            {items}
        </Breadcrumb>
    );
};

*/

class Breadcrumbs extends Component {
    getRouteName = (routeName) => {
        return t(this).breadCrumbs[routeName];
    }

    BreadcrumbsItem = ({...rest, match}) => {
        console.log('Bread', this);

        const routeName = findRouteName(match.url);
        if (routeName) {
            return (
                match.isExact ?
                    (
                        <BreadcrumbItem active>{this.getRouteName(routeName)}</BreadcrumbItem>
                    ) :
                    (
                        <BreadcrumbItem>
                            <Link to={match.url || ''}>
                                {this.getRouteName(routeName)}
                            </Link>
                        </BreadcrumbItem>
                    )
            );
        }
        return null;
    }

    render() {



        const paths = getPaths(this.props.location.pathname);
        const items = paths.map((path, i) => <Route key={i++} path={path} component={this.BreadcrumbsItem}/>);


        return (
            <Breadcrumb>
                {items}
            </Breadcrumb>
        );
    }
}

const mapStateToProps = state => ({lang: state.lang})


class BreadcrumbsComponent extends Component {
    render() {
        return (
            <div>
                <Route path="/:path" component={connect(mapStateToProps)(Breadcrumbs)} {...this.props} />
            </div>
        )
    }
}



export default BreadcrumbsComponent;

/*




export default connect(mapStateToProps)(Sidebar);
*/
