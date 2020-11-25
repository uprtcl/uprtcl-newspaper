import * as React from 'react';
import { hot } from 'react-hot-loader';

interface IProps {}

interface IState {}

class MenuBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { perspectiveId: '' };
  }

  async componentWillMount() {}

  public render() {
    return (
      <div className="main-nav section_margin">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 main_nav_cover" id="nav">
                <ul id="main-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Default</a>
                      </li>
                      <li>
                        <a href="home-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="home-slide.html">Big slide</a>
                      </li>
                      <li>
                        <a href="home-carausel.html">Carausel</a>
                      </li>
                      <li>
                        <a href="home-boxed.html">Boxed layout</a>
                      </li>
                      <li>
                        <a href="home-rtl.html">RTL layout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Layout</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Category</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="category-list.html">List</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="category-list.html">List</a>
                              </li>
                              <li>
                                <a href="category-grid.html">Grid</a>
                              </li>
                              <li>
                                <a href="category-masonry.html">Masonry</a>
                              </li>
                              <li>
                                <a href="category-big.html">Big </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="category-grid.html">Grid</a>
                          </li>
                          <li>
                            <a href="category-masonry.html">Masonry</a>
                          </li>
                          <li>
                            <a href="category-big.html">Big </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Posts</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="single.html">Default</a>
                          </li>
                          <li>
                            <a href="post-video.html">Video</a>
                          </li>
                          <li>
                            <a href="post-audio.html">Audio</a>
                          </li>
                          <li>
                            <a href="post-gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="post-image.html">Image</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="page-author.html">Author</a>
                          </li>
                          <li>
                            <a href="page-search.html">Search</a>
                          </li>
                          <li>
                            <a href="page-404.html">404</a>
                          </li>
                          <li>
                            <a href="page-contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="page-typography.html">Typography</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category-list.html">News</a>
                  </li>
                  <li>
                    <a href="category-grid.html">Economy</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="category-masonry.html">Entertainment</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="category-big.html">Festival</a>
                      </li>
                      <li>
                        <a href="category-list.html">Music</a>
                      </li>
                      <li>
                        <a href="category-grid.html">Movie</a>
                      </li>
                      <li>
                        <a href="category-list.html">Cinema</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category-list.html">Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(MenuBar);
