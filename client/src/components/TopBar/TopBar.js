import React from 'react';
import './TopBar.css';
import AddGuardCard from "../PatsTempComponents/AddGuardCard"
import AddTeacherCard from "../PatsTempComponents/AddTeacherCard"
import Modal from "../Modal";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            teacherIsOpen: false,
            guardianIsOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleTeacherModal = () => {
        this.setState({
            teacherIsOpen: !this.state.teacherIsOpen
        });
    }

    toggleGuardianModal = () => {
        this.setState({
            guardianIsOpen: !this.state.guardianIsOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" className="navText">Carpool Guardian 2.0</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login" className="navText">Login</NavLink>
                            </NavItem>
                            {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Signup Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.toggleTeacherModal}>
                                        Teacher Signup
                  </DropdownItem>
                                    <DropdownItem onClick={this.toggleGuardianModal}>
                                        Guardian Signup
                  </DropdownItem>
                                    {/* <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem> */}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Modal show={this.state.teacherIsOpen}
                    onClose={this.toggleTeacherModal}>
                    <AddTeacherCard />
                </Modal>

                <Modal show={this.state.guardianIsOpen}
                    onClose={this.toggleGuardianModal}>
                    <AddGuardCard />
                </Modal>
            </div>
        );
    }
}


