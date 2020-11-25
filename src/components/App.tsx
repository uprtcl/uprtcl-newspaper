import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/scss/App.scss';

import './../assets/template/css/bootstrap.css';
import './../assets/template/css/font-awesome.min.css';
import './../assets/template/css/animate.css';
import './../assets/template/css/owl.theme.default.css';
import './../assets/template/css/normalize.css';
import './../assets/template/css/slicknav.min.css';

import './../assets/template/css/main.css';
import './../assets/template/css/responsive.css';

import Header from './Header';
import TopBar from './TopBar';
import MenuBar from './MenuBar';
import PageContent from './PageContent';

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { perspectiveId: '' };
  }

  async componentWillMount() {}

  public render() {
    return (
      <div className="wrapper">
        <div className="page-content-wrapper">
          <TopBar />
          <Header />
          <MenuBar />
          <PageContent />
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
