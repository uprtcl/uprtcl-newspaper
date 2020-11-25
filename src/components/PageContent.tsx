import * as React from 'react';
import { hot } from 'react-hot-loader';

import { readerP } from '..';

import './../assets/scss/App.scss';
import PostSummary from './PostSummary';

interface IProps {}

interface IState {
  loading: boolean;
  posts: string[];
}

class PageContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { loading: true, posts: [] };
  }

  async componentWillMount() {
    const reader = await readerP;

    const wiki = (await reader.resolve(
      'zb2rhcvkquY5a3wR5dW81vqggxRDSu8Zw7BbeWUNwfkY1ui5M'
    )) as any;
    this.setState({ loading: false, posts: wiki.data.object.pages });
  }

  public render() {
    if (this.state.loading) {
      return <p>loading page</p>;
    }

    return (
      <div className="container-fluid">
        <div className="container">
          <div className="primary margin-15">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="owl-carousel owl-theme js section_margin line_hoz"
                  id="slideshow_face"
                >
                  <PostSummary postRef={this.state.posts[0]} />
                </div>
                <div className="post_list post_list_style_1">
                  <div className="alith_heading">
                    <h2 className="alith_heading_patern_2">Recent Posts</h2>
                  </div>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Magna aliqua ut enim ad minim veniam
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">23 Nov, 2020</span>
                      </div>
                    </div>
                  </article>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </article>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </article>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          It uses a dictionary of over 200 Latin words, combined
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </article>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Reading is not only informed by what’s going on with
                          us at that moment
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </article>
                  <article className="row section_margin animate-box">
                    <div className="col-md-3 animate-box">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/500x400"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="col-md-9 animate-box">
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          What you see and what you’re experiencing as you read
                          these
                        </a>
                      </h3>
                      <div className="post_meta">
                        <a
                          href="page-author.html"
                          className="meta_author_avatar"
                        >
                          <img
                            src="assets/images/author-avatar.png"
                            alt="author details"
                          />
                        </a>
                        <span className="meta_author_name">
                          <a href="page-author.html" className="author">
                            Steven Job
                          </a>
                        </span>
                        <span className="meta_categories">
                          <a href="archive.html">Politics</a>,{' '}
                          <a href="archive.html">News</a>
                        </span>
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </article>

                  <div className="site-pagination animate-box">
                    <ul className="page-numbers">
                      <li>
                        <a href="#" className="prev page-numbers">
                          PREV
                        </a>
                      </li>
                      <li>
                        <span
                          className="page-numbers current"
                          aria-current="page"
                        >
                          1.
                        </span>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          2.
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          3.
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          4.
                        </a>
                      </li>
                      <li>
                        <a href="#" className="next page-numbers">
                          NEXT
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <aside className="col-md-4 sidebar_right">
                <div className="sidebar-widget animate-box">
                  <div className="widget-title-cover">
                    <h4 className="widget-title">
                      <span>Popular Articles</span>
                    </h4>
                  </div>
                  <div className="latest_style_1">
                    <div className="latest_style_1_item">
                      <span className="item-count vertical-align">1.</span>
                      <div className="alith_post_title_small">
                        <a href="single.html">
                          <strong>
                            Ut enim ad minima veniam, quis nostrum
                          </strong>
                        </a>
                        <p className="meta">
                          <span>2 Sep, 2018</span> <span>268 views</span>
                        </p>
                      </div>
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="latest_style_1_item">
                      <span className="item-count vertical-align">2.</span>
                      <div className="alith_post_title_small">
                        <a href="single.html">
                          <strong>Curae lacinia consec tetur varius</strong>
                        </a>
                        <p className="meta">
                          <span>2 Sep, 2018</span> <span>268 views</span>
                        </p>
                      </div>
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="latest_style_1_item">
                      <span className="item-count vertical-align">3.</span>
                      <div className="alith_post_title_small">
                        <a href="single.html">
                          <strong>Euismod lacus vulpu tate augue</strong>
                        </a>
                        <p className="meta">
                          <span>2 Sep, 2018</span> <span>268 views</span>
                        </p>
                      </div>
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="latest_style_1_item">
                      <span className="item-count vertical-align">4.</span>
                      <div className="alith_post_title_small">
                        <a href="single.html">
                          <strong>Quam mauris lorem erat est euismod</strong>
                        </a>
                        <p className="meta">
                          <span>2 Sep, 2018</span> <span>268 views</span>
                        </p>
                      </div>
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="latest_style_1_item">
                      <span className="item-count vertical-align">5.</span>
                      <div className="alith_post_title_small">
                        <a href="single.html">
                          <strong>Nec eget ince ptos aenean gravida</strong>
                        </a>
                        <p className="meta">
                          <span>2 Sep, 2018</span> <span>268 views</span>
                        </p>
                      </div>
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget animate-box">
                  <div className="widget-title-cover">
                    <h4 className="widget-title">
                      <span>Search</span>
                    </h4>
                  </div>
                  <form
                    action="#"
                    className="search-form"
                    method="get"
                    role="search"
                  >
                    <label>
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

                <div className="sidebar-widget animate-box">
                  <div className="widget-title-cover">
                    <h4 className="widget-title">
                      <span>Trending</span>
                    </h4>
                  </div>
                  <div className="latest_style_2">
                    <div className="latest_style_2_item_first">
                      <figure className="alith_post_thumb_big">
                        <span className="post_meta_categories_label">
                          Legal, Blog
                        </span>
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/700x475"
                            alt=""
                          />
                        </a>
                      </figure>
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          <strong>
                            Nor again is there anyone who loves or pursues or
                            desires to obtain
                          </strong>
                        </a>
                      </h3>
                    </div>
                    <div className="latest_style_2_item">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Magna aliqua ut enim ad minim veniam
                        </a>
                      </h3>
                      <div className="post_meta">
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                    <div className="latest_style_2_item">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Magna aliqua ut enim ad minim veniam
                        </a>
                      </h3>
                      <div className="post_meta">
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                    <div className="latest_style_2_item">
                      <figure className="alith_news_img">
                        <a href="single.html">
                          <img
                            src="http://via.placeholder.com/200x175"
                            alt=""
                          />
                        </a>
                      </figure>
                      <h3 className="alith_post_title">
                        <a href="single.html">
                          Magna aliqua ut enim ad minim veniam
                        </a>
                      </h3>
                      <div className="post_meta">
                        <span className="meta_date">18 Sep, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget animate-box">
                  <div className="widget-title-cover">
                    <h4 className="widget-title">
                      <span>Tags cloud</span>
                    </h4>
                  </div>
                  <div className="alith_tags_all">
                    <a href="#" className="alith_tagg">
                      Business
                    </a>
                    <a href="#" className="alith_tagg">
                      Technology
                    </a>
                    <a href="#" className="alith_tagg">
                      Sport
                    </a>
                    <a href="#" className="alith_tagg">
                      Art
                    </a>
                    <a href="#" className="alith_tagg">
                      Lifestyle
                    </a>
                    <a href="#" className="alith_tagg">
                      Three
                    </a>
                    <a href="#" className="alith_tagg">
                      Photography
                    </a>
                    <a href="#" className="alith_tagg">
                      Lifestyle
                    </a>
                    <a href="#" className="alith_tagg">
                      Art
                    </a>
                    <a href="#" className="alith_tagg">
                      Education
                    </a>
                    <a href="#" className="alith_tagg">
                      Social
                    </a>
                    <a href="#" className="alith_tagg">
                      Three
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(PageContent);
