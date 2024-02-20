import { SearchOutlined, PlusCircleOutlined, StarOutlined, BellOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { LuUserCircle } from "react-icons/lu";


const Header = () => {
    const [selected, setSelected] = useState('Order')

    return (
        <Row className='main-header-div' justify='space-between' align='middle'>
            <Col xs={12} sm={12}>
                <img src={Logo} height={60} />
            </Col>
            <Col xs={12} sm={12} className='d-flex align-items-center justify-content-end'>
                <SearchOutlined className='header-icon' />
                <PlusCircleOutlined className='header-icon' />
                <StarOutlined className='header-icon' />
                <BellOutlined className='header-icon' />
                <LuUserCircle className='header-icon' />
            </Col>
            {/* <Col xs={24} sm={8}>
                <div style={{ padding: 10 }}>
                    <div style={{ fontSize: 18 }}>
                        <b>B2B - </b> Testing Only*
                    </div>
                    <div className='d-flex'>
                        <div style={{ marginRight: 50 }}>Order Loc</div>
                        <div style={{ marginRight: 14 }}>USWIN</div>
                        <div style={{ marginRight: 14 }}>Sales ID</div>
                    </div>
                    <div className='d-flex'>
                        <p style={{ marginRight: 10, marginBottom: 0 }} className='d-flex align-items-center'>7197001UP E &nbsp;
                            <EditOutlined />
                        </p>
                        <p className='m-0'>Kallsi3</p>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={8} className='d-flex align-items-end justify-content-center' style={{ height: 90 }}>
                {
                    ['Home', 'Account', 'Order']?.map(data => {
                        return <div
                            className={`${data === selected ? 'active-header' : ''} header-title`}
                            onClick={() => setSelected(data)}
                        >{data}</div>
                    })
                }
            </Col>
            <Col xs={24} sm={8} className='d-flex justify-content-end'>
                <SyncOutlined className='header-icon' />
                <RiUserSettingsLine className='header-icon' />
                <InfoCircleOutlined className='header-icon' />
                <LuSun className='header-icon' />
            </Col> */}
        </Row>
    )
}

export default Header;