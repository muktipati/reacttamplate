import React from 'react';
import classnames from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { withStyles } from 'material-ui/styles';
//import styles from '../../style/style.css';
import FontIcon from '../common/FontIcon';
import Tabs from './SideNavBar.json';

const style = () => ({
  tabsHolder: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  tab: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    width: '100%',
    margin: '5px 0 0 0',
    //padding: 5,
    "&:hover": {
      backgroundColor: '#4d5968',
    }
  },
  activeTab: {
    borderLeft: '1px solid #dd3333',
    backgroundColor: '#4d5968',
   
  },
  subTab: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '5px 0 0 0',
    
    whiteSpace: 'nowrap',
    backgroundColor: '#2c3b41',
    width: '100%',
    overflow: 'hidden',
  
  },
  tabHead: {
    display: 'flex',
    flexFlow: 'row',
    padding: '10px 10px 10px 24px',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    width: '100%',
    cursor: 'pointer',
    zIndex:'9999'
  },
  tabHeading: {
    marginLeft: 10,
  },
  subTabName: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '5px 2px',
    padding: '2px',
    width: '100%',
    cursor: 'pointer'

  },
  floatingNavBar: {
    padding: '10px',
    backgroundColor: '#222d32',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    textAlign: "center",
    width: '10%',
    borderRadius: '0 5px 5px 0'
  }
});
class SideNavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabset: [],
      openSubTab: [],
      subTabPosition: {},
    }
  }
  componentWillMount() {
    this.setState({
      tabset: Tabs,
      openSubTab: Array(Tabs.tabs.length)
    })
  }
  componentDidMount() {
    console.log("side", this.props.history.location.pathname)
    const activePath = `.${this.props.history.location.pathname}`
    this.setState({
      ...this.state,
      tabset: {
        ...this.state.tabset,
        tabs: this.state.tabset.tabs.map(itm => {
          if (itm.path === activePath) {
            itm.isActive = true
          } else {

            itm.isActive = false
          }
          return itm

        }),
      },
      tabs: this.state.tabset.tabs.map(itm => {
        if (itm.subTabs) {
          itm.subTabs.map(item => {
            if (item.path === activePath) {
              item.isActive = true
            } else {
              item.isActive = false
            }
            return item
          })
        }

      }),
    })
  }
  openTab(tabId) {

    this.setState({
      ...this.state,
      tabset: {
        ...this.state.tabset,
        tabs: this.state.tabset.tabs.map(itm => {
          if (itm.id === tabId) {
            itm.isOpen = !itm.isOpen
          }
          return itm
        }),
      }
    })

  }

  renderFloatingNavBar(tab) {
    const { classes, history } = this.props
    return (
      <div
        className={classes.floatingNavBar}
        style={{ left: 70, top: this.state.subTabPosition ? this.state.subTabPosition.top - 55 : 0 }}
      >
        <div onClick={tab.type === 'multiChild' ? () => { } : () => history.push(tab.path)}>
          {tab.name}
        </div>
        {tab.subTabs && tab.subTabs.map(stab => {
          return (
            <div key={stab.id}>
              <div
                className={classes.subTabName}
                onClick={() => history.push(stab.path)}
              >
                {stab.name}
              </div>
            </div>

          )
        })}
      </div>
    )
  }
  render() {
    const { classes, openSideDrawer, history } = this.props;


    return (
      <div
        className={classnames(
          'side-nav-bar',
          openSideDrawer
            ? 'side-nav-bar-open'
            : 'side-nav-bar-closed',
        )}
      >
        <div className={classnames(classes.tabsHolder, !openSideDrawer ? 'center_align' : '')}>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          {this.state.tabset &&
            this.state.tabset.tabs.map((itr, i) => {
              return (
                <div
                  className={classnames(classes.tab, itr.isActive ? classes.activeTab : '')}
                  onClick={itr.type === 'multiChild' ? () => this.openTab(itr.id) : () => {
                    this.setState({
                      ...this.state,
                      tabset: {
                        ...this.state.tabset,
                        tabs: this.state.tabset.tabs.map(itm => {
                          if (itm.id === itr.id) {
                            itm.isActive = true
                          }
                          else {
                            itm.isActive = false
                          }
                          if (itm.subTabs) {
                            itm.subTabs.map(item => {
                              item.isActive = false
                              return item
                            })
                          }

                          return itm
                        }),
                      }
                    })
                    history.push(itr.path)
                  }}
                >
                  <div
                    className={classes.tabHead}
                    onMouseOver={(e) => {

                      if (true) {
                        let openSubTabCopy = this.state.openSubTab
                        openSubTabCopy[i] = true
                        this.setState({
                          subTabPosition: e.currentTarget.getBoundingClientRect(),
                          openSubTab: [...openSubTabCopy],
                        })
                        // console.log('hovering', e.currentTarget.getBoundingClientRect())
                      }
                    }}
                    onMouseLeave={() => {
                      let openSubTabCopy = this.state.openSubTab
                      openSubTabCopy[i] = false
                      this.setState({
                        subTabPosition: {},
                        openSubTab: [...openSubTabCopy]
                      })
                    }}
                  >
                    <FontIcon
                      icon={itr.icon}
                      size={18}
                      className={openSideDrawer ? 'fadeIn' : ""}

                    />
                    {this.state.openSubTab[i] && this.state.openSubTab && !openSideDrawer && this.renderFloatingNavBar(itr)}
                    <span
                      className={classnames(classes.tabHeading,
                        openSideDrawer ? 'fadeIn' : 'fadeOut')}
                    >
                      {itr.name}
                    </span>
                    <div className={'flex-grow'} />
                    {itr.type === 'multiChild' && openSideDrawer && (
                      <span className={itr.isOpen ? 'rotate-right' : 'rotate-left'}>
                        <FontIcon icon={'angle-down'} onClick={() => this.openTab(itr.id)} />
                      </span>
                    )}
                  </div>

                  <div className={classnames(classes.subTab, (itr.isOpen && openSideDrawer) ? 'dropdown' : 'dropup')}>
                    {itr.isOpen && itr.subTabs && itr.subTabs.length && itr.subTabs.map(stab => {
                      return (
                        // <div className={classnames(classes.subTabName, stab.isActive ? classes.activeTab : '')}
                        <div className={classnames(classes.subTabName)}
                          onClick={(e) => {

                            this.setState({
                              ...this.state,
                              tabset: {
                                ...this.state.tabset,
                                tabs: this.state.tabset.tabs.map(itm => {
                                  if (itm.subTabs) {
                                    itm.subTabs.map(item => {
                                      if (item.id === stab.id) {
                                        item.isActive = true
                                      } else {
                                        item.isActive = false
                                      }
                                      return item
                                    })
                                  }
                                  itm.isActive = false
                                  return itm
                                }),
                              }
                            })
                            console.log("[[state aftre subtab selected]]", this.state)
                            history.push(stab.path)
                            e.stopPropagation()
                          }}

                        >
                          <div>
                          <FontIcon
                            icon={stab.icon}
                            size={20}
                          />
                          <span style={{'marginLeft':'10px'}}>
                          {stab.name}
                          </span>
                          </div>
                          {/* {stab.name} */}

                        </div>
                      )
                    })}
                  </div>

                </div>


              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SideNavBar);
