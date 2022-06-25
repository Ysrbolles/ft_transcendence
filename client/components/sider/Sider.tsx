import React, { useState } from 'react';
import { Layout, Button, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';

import style from './sider.module.css';


const { Sider } = Layout;



const SiderLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={style.container}>
            <Sider className={style.sider} trigger={null} collapsible collapsed={collapsed}>
                <div className={style.trigger}>
                    <Icon component={collapsed ? triggerClose : triggerOpen} onClick={() => setCollapsed(!collapsed)} />
                </div>
                <Menu className={style.menu}
                    theme="dark"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <Icon component={profileIcon} />,
                            label: 'Profile',
                        },
                        {
                            key: '2',
                            icon: <Icon component={messageIcon} />,
                            label: 'Messages',
                        },
                        {
                            key: '3',
                            icon: <Icon component={achivementIcon} />,
                            label: 'Achivements',
                        },
                        {
                            key: '4',
                            icon: <Icon component={gamesIcon} />,
                            label: 'Current Games',
                        },
                        {
                            key: '5',
                            icon: <Icon component={newGameIcon} />,
                            label: 'Create Game',
                        },
                    ]}
                />
            </Sider>
        </div>
    );
}

export default SiderLayout;

const triggerOpen = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.3" x="5.3335" y="6.66602" width="13.33" height="2.66667" rx="1.33333" fill="currentColor" />
        <rect opacity="0.3" x="5.3335" y="17.334" width="13.33" height="2.66667" rx="1.33333" fill="currentColor" />
        <path d="M6.66683 12C5.93045 12 5.3335 12.597 5.3335 13.3333C5.3335 14.0697 5.93045 14.6667 6.66683 14.6667H25.3302C26.0665 14.6667 26.6635 14.0697 26.6635 13.3333C26.6635 12.597 26.0665 12 25.3302 12H6.66683ZM6.66683 22.666C5.93045 22.666 5.3335 23.263 5.3335 23.9994C5.3335 24.7357 5.93045 25.3327 6.66683 25.3327H25.3302C26.0665 25.3327 26.6635 24.7357 26.6635 23.9994C26.6635 23.263 26.0665 22.666 25.3302 22.666H6.66683Z" fill="currentColor" />
    </svg>

)


const triggerClose = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.3" x="5.3335" y="6.66602" width="21.3333" height="2.66667" rx="1.33333" fill="currentColor" />
        <rect opacity="0.3" x="5.3335" y="17.334" width="21.3333" height="2.66667" rx="1.33333" fill="currentColor" />
        <path d="M6.66683 12C5.93045 12 5.3335 12.597 5.3335 13.3333C5.3335 14.0697 5.93045 14.6667 6.66683 14.6667H17.3335C18.0699 14.6667 18.6668 14.0697 18.6668 13.3333C18.6668 12.597 18.0699 12 17.3335 12H6.66683ZM6.66683 22.6667C5.93045 22.6667 5.3335 23.2636 5.3335 24C5.3335 24.7364 5.93045 25.3333 6.66683 25.3333H17.3335C18.0699 25.3333 18.6668 24.7364 18.6668 24C18.6668 23.2636 18.0699 22.6667 17.3335 22.6667H6.66683Z" fill="currentColor" />
    </svg>
)

const profileIcon = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M7.99992 7.33333C6.52716 7.33333 5.33325 6.13943 5.33325 4.66667C5.33325 3.19391 6.52716 2 7.99992 2C9.47268 2 10.6666 3.19391 10.6666 4.66667C10.6666 6.13943 9.47268 7.33333 7.99992 7.33333Z" fill="currentColor" />
        <path d="M2.00043 13.4655C2.25884 10.2837 4.84127 8.66602 7.98889 8.66602C11.1808 8.66602 13.8033 10.1948 13.9986 13.466C14.0064 13.5963 13.9986 13.9993 13.4978 13.9993C11.0274 13.9993 7.35648 13.9993 2.485 13.9993C2.31781 13.9993 1.98636 13.6388 2.00043 13.4655Z" fill="currentColor" />
    </svg>
)

const messageIcon = () => (
    <svg width="2.3em"
        height="2.3em"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4921 11.8088C14.8077 12.1244 15.3472 11.8998 15.3457 11.4535L15.336 8.73684V3.68421C15.336 2.75405 14.5819 2 13.6518 2H5.79212C4.86196 2 4.10791 2.75405 4.10791 3.68421V6H7.66669C9.32354 6 10.6667 7.34315 10.6667 9V10.4211H13.1044L14.4921 11.8088Z" fill="currentColor" />
        <path opacity="0.3" d="M1.32349 12.0007V8.66732C1.32349 7.93094 1.92044 7.33398 2.65682 7.33398H7.99015C8.72653 7.33398 9.32349 7.93094 9.32349 8.66732V12.0007C9.32349 12.737 8.72653 13.334 7.99015 13.334H2.73397L2.18665 13.8578C1.86864 14.1622 1.34092 13.9368 1.34092 13.4966V12.2168C1.32945 12.1465 1.32349 12.0743 1.32349 12.0007ZM4.00012 9.66732C4.00012 9.48322 4.14935 9.33398 4.33345 9.33398H7.66678C7.85088 9.33398 8.00012 9.48322 8.00012 9.66732C8.00012 9.85141 7.85088 10.0007 7.66678 10.0007H4.33345C4.14935 10.0007 4.00012 9.85141 4.00012 9.66732ZM6.33345 10.6673C6.14935 10.6673 6.00012 10.8166 6.00012 11.0007C6.00012 11.1847 6.14935 11.334 6.33345 11.334H7.66678C7.85088 11.334 8.00012 11.1847 8.00012 11.0007C8.00012 10.8166 7.85088 10.6673 7.66678 10.6673H6.33345Z" fill="currentColor" />
    </svg>
)

const achivementIcon = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M3.48438 0.588672C3.18062 0.588672 2.93437 0.834915 2.93437 1.13867C2.93437 1.44243 3.18062 1.68867 3.48438 1.68867V0.588672ZM14.3122 12.5164C14.3122 12.8202 14.5584 13.0665 14.8622 13.0665C15.1659 13.0665 15.4122 12.8202 15.4122 12.5164H14.3122ZM3.48438 1.68867H14.6622V0.588672H3.48438V1.68867ZM14.3122 1.33867V12.5164H15.4122V1.33867H14.3122ZM14.6622 1.68867C14.4689 1.68867 14.3122 1.53197 14.3122 1.33867H15.4122C15.4122 0.924458 15.0764 0.588672 14.6622 0.588672V1.68867Z" fill="currentColor" />
        <path opacity="0.3" d="M1.20898 2.86406C0.905228 2.86406 0.658984 3.11031 0.658984 3.41406C0.658984 3.71782 0.905228 3.96406 1.20898 3.96406V2.86406ZM12.0368 14.7918C12.0368 15.0956 12.283 15.3418 12.5868 15.3418C12.8905 15.3418 13.1368 15.0956 13.1368 14.7918H12.0368ZM1.20898 3.96406H12.3868V2.86406H1.20898V3.96406ZM12.0368 3.61406V14.7918H13.1368V3.61406H12.0368ZM12.3868 3.96406C12.1935 3.96406 12.0368 3.80736 12.0368 3.61406H13.1368C13.1368 3.19985 12.801 2.86406 12.3868 2.86406V3.96406Z" fill="currentColor" />
        <path d="M0 6.33399C0 5.7817 0.447715 5.33398 1 5.33398H9.66667C10.219 5.33398 10.6667 5.7817 10.6667 6.33398V15.0006C10.6667 15.5529 10.219 16.0007 9.66667 16.0007H1C0.447717 16.0007 0 15.5529 0 15.0007V6.33399Z" fill="currentColor" />
    </svg>
)

const gamesIcon = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="2.66675" y="2.66602" width="4.66667" height="4.66667" rx="1.5" fill="currentColor" />
        <path opacity="0.3" d="M8.66675 4.16602C8.66675 3.33759 9.33832 2.66602 10.1667 2.66602H11.8334C12.6618 2.66602 13.3334 3.33759 13.3334 4.16602V5.83268C13.3334 6.66111 12.6618 7.33268 11.8334 7.33268H10.1667C9.33832 7.33268 8.66675 6.66111 8.66675 5.83268V4.16602ZM2.66675 10.166C2.66675 9.33759 3.33832 8.66602 4.16675 8.66602H5.83342C6.66184 8.66602 7.33342 9.33759 7.33342 10.166V11.8327C7.33342 12.6611 6.66184 13.3327 5.83342 13.3327H4.16675C3.33832 13.3327 2.66675 12.6611 2.66675 11.8327V10.166ZM10.1667 8.66602C9.33832 8.66602 8.66675 9.33759 8.66675 10.166V11.8327C8.66675 12.6611 9.33832 13.3327 10.1667 13.3327H11.8334C12.6618 13.3327 13.3334 12.6611 13.3334 11.8327V10.166C13.3334 9.33759 12.6618 8.66602 11.8334 8.66602H10.1667Z" fill="currentColor" />
    </svg>
)

const newGameIcon = () => (
    <svg width="3em"
        height="3em"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75125 7.08625C4.75125 7.40865 5.0126 7.67 5.335 7.67C5.6574 7.67 5.91875 7.40865 5.91875 7.08625V5.91875H7.08625C7.40865 5.91875 7.67 5.6574 7.67 5.335C7.67 5.0126 7.40865 4.75125 7.08625 4.75125H5.91875V3.58375C5.91875 3.26135 5.6574 3 5.335 3C5.0126 3 4.75125 3.26135 4.75125 3.58375V4.75125H3.58375C3.26135 4.75125 3 5.0126 3 5.335C3 5.6574 3.26135 5.91875 3.58375 5.91875H4.75125V7.08625Z" fill="currentColor" />
        <path opacity="0.3" d="M8.66675 4.16602C8.66675 3.33759 9.33832 2.66602 10.1667 2.66602H11.8334C12.6618 2.66602 13.3334 3.33759 13.3334 4.16602V5.83268C13.3334 6.66111 12.6618 7.33268 11.8334 7.33268H10.1667C9.33832 7.33268 8.66675 6.66111 8.66675 5.83268V4.16602ZM2.66675 10.166C2.66675 9.33759 3.33832 8.66602 4.16675 8.66602H5.83342C6.66184 8.66602 7.33342 9.33759 7.33342 10.166V11.8327C7.33342 12.6611 6.66184 13.3327 5.83342 13.3327H4.16675C3.33832 13.3327 2.66675 12.6611 2.66675 11.8327V10.166ZM10.1667 8.66602C9.33832 8.66602 8.66675 9.33759 8.66675 10.166V11.8327C8.66675 12.6611 9.33832 13.3327 10.1667 13.3327H11.8334C12.6618 13.3327 13.3334 12.6611 13.3334 11.8327V10.166C13.3334 9.33759 12.6618 8.66602 11.8334 8.66602H10.1667Z" fill="currentColor" />
    </svg>
)