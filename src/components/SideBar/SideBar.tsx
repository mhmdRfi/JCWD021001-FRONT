
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  // Button,
  Image,
} from '@chakra-ui/react';
import {
  // FiHome,
  // FiTrendingUp,
  // FiCompass,
  FiStar,
  // FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  // FiUsers,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { IconLayoutDashboard, IconPasswordUser, IconCup, IconReportMoney, IconUsers } from '@tabler/icons-react'
import LogoIcon  from '../../assets/ee8e2ef267a626690ecec7c84a48cfd4.png'
import { useAppSelector } from '../../redux/hook';
import { useAppDispatch } from '../../redux/hook';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../redux/reducer/authReducer';



interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: IconLayoutDashboard },
  { name: 'Product', icon: IconCup },
  { name: 'Report', icon: IconReportMoney },
  { name: 'Favourites', icon: FiStar },
  { name: 'Cashier', icon: IconUsers },
  { name: 'Admin', icon: IconPasswordUser}
];



const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 40 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mt='20px' justifyContent="space-between">
        
      <Image src={LogoIcon} margin={'auto'} boxSize={'72px'}/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      padding={'16px'}
    >
      <Flex
        className='nav-item-container'
        align="center"
        p="2"
        margin={'0 auto'}
        flexDirection={'column'}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={'#4A4A4A'}
        _hover={{
          bg: '#EAEFEC',
          color: '#286043',
          margin: '0 16px'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mb="3"
            fontSize="24px"
            stroke={"1px"}
            _groupHover={{
              color: '#286043',
            }}
            as={icon}
          />
        )}
        <Box className='name-container'
        fontSize={'14px'}>
          {children}
        </Box>
        
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const dispatch = useAppDispatch();
    const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.authReducer);
  return (
    <Flex className='mobile-nav-container'
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
  <Flex alignItems={'center'} gap={'10px'} display={{base:'flex', md: 'none'}} flexDirection={'row'}>
    <Image src={LogoIcon} boxSize={'29px'}/>
      <Text fontSize={'22px'} fontWeight={'800'} color={'#286043'}>Starbucks</Text>
  </Flex>
      

      <HStack className='navTop'
      spacing={{ base: '0', md: '6' }}
      marginRight={{base: '0', md: '60px'}}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
              {user?.avatar ? (
						<Avatar
							name="Dan Abrahmov"
							src={`${import.meta.env.VITE_APP_IMAGE_URL}/avatar/${
								user?.avatar
							}`}
							w={"56px"}
							h={"56px"}
						/>
					) : (
						<Avatar
							name="Dan Abrahmov"
							bg="rgba(40, 96, 67, 1)"
							src={"https://bit.ly/broken-link"}
							w={"56px"}
							h={"56px"}
							color={"white"}
						/>
					)}
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                  {user.roleId === 1 ? 'Admin' : user.roleId === 2 ? 'Cashier' : 'Unknown Role'}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              
              <MenuItem onClick={() => {dispatch(logoutSuccess()); navigate("/")}}> Sign out</MenuItem>
              
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </>
  );
};

export {SidebarWithHeader};
