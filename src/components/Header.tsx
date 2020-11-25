import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/scss/App.scss';

interface IProps {}

interface IState {}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { perspectiveId: '' };
  }

  async componentWillMount() {}

  public render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 header">
              <h1 className="logo">
                <a href="">dxDAO Today</a>
              </h1>
              <p className="tagline">THE LATEST ON DXDAO, DXDAO-GOVERNED</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(Header);
