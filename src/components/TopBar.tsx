import * as React from 'react';
import { hot } from 'react-hot-loader';

interface IProps {}

interface IState {}

class TopBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { perspectiveId: '' };
  }

  async componentWillMount() {}

  public render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="top_bar margin-15">
            <div className="row">
              <div className="col-md-6 col-sm-12 time">
                <div className="off-canvas-toggle" id="off-canvas-toggle">
                  <span></span>
                  <p className="sidebar-open">MORE</p>
                </div>
                <i className="fa fa-clock-o"></i>
                <span>&nbsp;&nbsp;&nbsp;Friday, 13 Nov 2020</span>
              </div>
              <div className="col-md-6 col-sm-12 social">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
                <div className="top-search">
                  <i className="fa fa-search"></i>
                  <span>SEARCH</span>
                </div>
                <div className="top-search-form">
                  <form
                    action="#"
                    className="search-form"
                    method="get"
                    role="search"
                  >
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        name="s"
                        value=""
                        placeholder="Search …"
                        className="search-field"
                      />
                    </label>
                    <input
                      type="submit"
                      value="Search"
                      className="search-submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(TopBar);
