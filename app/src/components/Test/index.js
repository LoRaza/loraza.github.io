/**
 *NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Header from 'src/components/Home/Header/Header';
/**
 * Local import
 */

/*
 * Code
 */
class ProjectList extends React.Component {
  createProjectListItem(project) {
      let byline = project.acf.project_byline
      let client = project.acf.project_client
      return (
          <li key={'project-' + project.id}>
              <a to={'/projects/' + project.slug}>
                <h3 className="projectlist--client">test</h3>
                <h4 className="projectlist--byline">efafaf</h4>
              </a>
          </li>
      );
  }
  render() {
      return (
          <div className="project-list">
              <ul className="menu vertical">
                { this.props.projects.map( this.createProjectListItem ) }
              </ul>
          </div>
      )
  }
}

class ProjectCategory extends React.Component {
  constructor(props) {
      super(props)

      this.setActive = this.setActive.bind(this)

      this.state = {
        projects: []
      }
  }
  componentWillMount() {
    // this.getProjects(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
    
    })
  }
  getProjects() {
    let catid = this.props.cat.id
    let url = 'http://beta.json-generator.com/api/json/get/EyrhxmRVz'
    fetch(url).then( response => response.json() )
    .then( json => { this.setState({ projects: json }) })
  }
  setActive() {
      this.props.handleClick(this.props.Index)
  }
  getWidth(isActive) {
      let w = !isActive ? 'calc(20vw - 20px)' : '500px'
      return w
  }
  render() {
      let { active, focused, shiftLeft, isLast } = this.props

      let styles = {
        container: { 
          transform: (function() {
              return active
                  ? 'scale(1.1) translate3d(0, 0, 0)'
                  : 'scale(1) translate3d(0, 0, 0)'
          })()
        }, item: {
            transform: (function() {
                let direction = (shiftLeft) ? '-': ''
                let transform = (focused && !active) ? 'translate3d('+ direction +'100%, 0, 0)' : 'translate3d(0, 0, 0)'
                return transform
            })()
        }, background: {
            background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
            backgroundSize: 'cover',
            height: '800px',
            width: (this.getWidth(active))
        }
      }
      let classes = classNames({category: true, isActive: active, isLast, shiftLeft})
      return (
          <li className={classes} style={styles.item}>
              <div className="category--content">
                  <h2>{this.props.cat.name}</h2>
                  <div className="project-list">
                    <ul className="menu vertical">
                      <li>
                        <a>
                          <h3 className="projectlist--client">test</h3>
                        </a>
                      </li>
                      <li>
                        <Link exact to="/PortfolioBuilder" >
                          <p>Description</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="category--image-container" onClick={this.setActive} style={styles.container}>
                  <div className="category--image" style={styles.background}></div>
              </div>
              <div className="category--name">
                <h6>{this.props.cat.name}</h6>
              </div>
              <div className="category--closeButton">
                <a href="#">Back</a>
              </div>
          </li>
      )
  }
}

class Collection extends React.Component {

  constructor(props) {
      super(props);

      this._handleClick = this._handleClick.bind(this)
      this.categoryNode = this.categoryNode.bind(this)
      this._focusOff = this._focusOff.bind(this)

      this.state = {
        open: false,
        activeIndex: null,
        categories: []
      }
  }
  componentDidMount() {
    // this._getCategories(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
      categories: [{"thumbnail":"https://unsplash.it/1200/1200","link":"http://seanma.de","taxonomy":"category","count":6,"name":"test","slug":"test","id":"586537da62981d5fb8c21617"},{"thumbnail":"https://unsplash.it/1200/1201","link":"http://seanma.de","taxonomy":"category","count":8,"name":"test","slug":"test","id":"586537da60c040bc1e3060a1"},{"thumbnail":"https://unsplash.it/1200/1202","link":"http://seanma.de","taxonomy":"category","count":3,"name":"test","slug":"test","id":"586537daffc67c66ec4dc356"},{"thumbnail":"https://unsplash.it/1200/1203","link":"http://seanma.de","taxonomy":"category","count":6,"name":"test","slug":"test","id":"586537dae1be34396786ce5f"},{"thumbnail":"https://unsplash.it/1200/1204","link":"http://seanma.de","taxonomy":"category","count":2,"name":"test","slug":"test","id":"586537dab274a22da2f3edae"}]
    })
  }
  _getCategories() {
    let _this = this
    let url = 'http://beta.json-generator.com/api/json/get/E1NpHQAEf';
    fetch(url).then( response => response.json() )
    .then( json => { _this.setState({ categories: json }) })
  }
  _handleClick(i){
    this.setState({
      activeIndex: i,
      open: true
    })
  }
  _focusOff(e){
    e.preventDefault()
    if (e.target.className !== 'category--image') {
      this.setState({
        activeIndex: null,
        open: false
      })
    }
  }
  categoryNode(cat, i){
      let isLast = ( i === this.state.categories.length - 1 || i === this.state.categories.length - 2)
      let shiftLeft = ( i < this.state.activeIndex )

      return (
        <ProjectCategory
          cat={cat}
          key={'cat-' + i}
          handleClick={this._handleClick}
          active={i === this.state.activeIndex}
          focusOff={this._focusOff}
          focused={this.state.open}
          shiftLeft={shiftLeft}
          Index={i}
          isLast={isLast}
        />
      )
  }
  render() {
    let catNodes = this.state.categories.map(this.categoryNode)
    let classes = classNames({
      focused: this.state.open
    })
    return (
    <div>
      <Header />
      <div className={'categories--menu-container ' + classes} onClick={this._focusOff} >
        <ul className="categories menu">
          {catNodes}
        </ul>
      </div>
    </div>
    )
  }
}



/**
 * Export
 */
export default Collection;
