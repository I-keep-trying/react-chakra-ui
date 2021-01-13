import React from 'react'
import {
  IconButton,
  useColorMode,
  Spacer,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Tabs>
        <TabList>
          <Tab as={RouterLink} to="/">
            HOME
          </Tab>
          <Tab as={RouterLink} to="/contact">
            CONTACT
          </Tab>
          <Spacer />
          {colorMode === 'light' ? (
            <IconButton
              aria-label="dark mode"
              icon={<MoonIcon />}
              onClick={toggleColorMode}
            />
          ) : (
            <IconButton
              aria-label="light mode"
              icon={<SunIcon />}
              onClick={toggleColorMode}
            />
          )}
        </TabList>
      </Tabs>
    </>
  )
}

export default Menu
