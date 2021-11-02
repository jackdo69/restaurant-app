import React, { useState } from 'react';
import StyledLabel from './styled/StyledLabel';
import StyledNavigationItems from './styled/StyledNavigationitems';
import NavigationItem from './NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationItems = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <StyledLabel onClick={() => setShowSidebar(!showSidebar)}>
        <FontAwesomeIcon icon={faBars} />
      </StyledLabel>
      <StyledNavigationItems show={showSidebar}>
        <NavigationItem
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          link='/menu'
        >
          Menu
        </NavigationItem>
        <NavigationItem
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          link='/order'
        >
          Order
        </NavigationItem>
        <NavigationItem
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          link='/booking'
        >
          Booking
        </NavigationItem>
        <NavigationItem
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          link='/account'
        >
          Account
        </NavigationItem>
        {props.auth ? (
          <NavigationItem
            toggleSidebar={() => setShowSidebar(!showSidebar)}
            link='/logout'
          >
            Sign out
          </NavigationItem>
        ) : null}
      </StyledNavigationItems>
    </>
  );
};

export default NavigationItems;
