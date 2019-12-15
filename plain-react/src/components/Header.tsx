import React from 'react';

interface style {
  styleName: string | undefined
}

class Header extends React.Component<style> {
  render() {
    const { styleName } = this.props

    return (
      <div className="Header">
        <header className={styleName}>TODO LIST</header>
      </div>
    );
  }
}

export default Header;
