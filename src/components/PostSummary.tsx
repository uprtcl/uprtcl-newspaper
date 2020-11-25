import * as React from 'react';
import { hot } from 'react-hot-loader';

import { readerP } from '..';

import './../assets/scss/App.scss';

interface IProps {
  postRef: string;
}

interface IState {
  loading: boolean;
  title: string;
  imgSrc: string;
  summary: string;
}

class PostSummary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { loading: true, imgSrc: '', title: '', summary: '' };
  }

  async componentWillMount() {
    const reader = await readerP;

    const post = (await reader.resolve(this.props.postRef)) as any;
    const topPar = (await reader.resolve(post.data.object.links[0])) as any;
    const imageTag = topPar.data.object.text;
    const imageSrcStart = imageTag.indexOf('src="') + 4 + 1;
    const imageTagRest = imageTag.slice(imageSrcStart);
    const deltaSrcEnd = imageTagRest.indexOf('"');
    const imgSrc = imageTag.substr(imageSrcStart, deltaSrcEnd);

    const firstPar = (await reader.resolve(post.data.object.links[1])) as any;

    this.setState({
      loading: false,
      title: post.data.object.text,
      imgSrc: imgSrc,
      summary: firstPar.data.object.text,
    });
  }

  public render() {
    if (this.state.loading) {
      return <p>loading</p>;
    }

    return (
      <div className="item">
        <figure className="alith_post_thumb_big">
          <span className="post_meta_categories_label">New</span>
          <a href="single.html">
            <img src={this.state.imgSrc} alt="" />
          </a>
        </figure>
        <h3 className="alith_post_title">
          <a href="single.html">{this.state.title}</a>
        </h3>
        <div className="alith_post_content_big">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="post_meta_center">
                <p>
                  <a href="page-author.html">
                    <img
                      src="https://assets.coingecko.com/coins/images/11148/small/dxdao.png?1589054791"
                      alt="author details"
                    />
                  </a>
                </p>
                <p>
                  <a href="page-author.html" className="author">
                    <strong>dxDAO</strong>
                  </a>
                </p>
                <span className="post_meta_date">23 Nov, 2020</span>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <p
                dangerouslySetInnerHTML={{ __html: this.state.summary }}
                className="alith_post_except"
              ></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(PostSummary);
