import Select from "react-select"
import { DroupDownData, tableHeader, tableData } from "../constant";
import { Col, Divider, Input, Row } from "antd";
import { Table } from "react-bootstrap";

const BodyPart = () => {
    return <div>
        <div className="main-title">
            Promo Central
        </div>
        <Divider />
        <Row className="p-4 align-items-center">
            <Col xs={12} sm={5}>
                <Input type="text" placeholder="Search by promo title" />
            </Col>
            <Col xs={4} sm={3} className="ms-3">
                <div className="save-button">Search</div>
            </Col>
        </Row>
        <Divider />
        <Row className="p-4 align-items-center">
            <Col xs={24} sm={5}>
                <Select
                    classNamePrefix="select"
                    defaultValue={DroupDownData[0]}
                    name="all"
                    options={DroupDownData}
                />
            </Col>
            <Col xs={24} sm={4} className="ms-3">
                <Select
                    classNamePrefix="select"
                    defaultValue={DroupDownData[1]}
                    name="devide promo"
                    options={DroupDownData}
                />
            </Col>
            <Col xs={24} sm={4} className="ms-3">
                <Select
                    classNamePrefix="select"
                    defaultValue={DroupDownData[2]}
                    name="prod promo"
                    options={DroupDownData}
                />
            </Col>
            <Col xs={24} sm={4} className="ms-3">
                <Select
                    classNamePrefix="select"
                    defaultValue={DroupDownData[3]}
                    name="Transaction type"
                    options={DroupDownData}
                />
            </Col>
            <Col xs={11} sm={3} className="ms-3 d-flex justify-content-center">
                <div className="more-filter">Show More Filters</div>
            </Col>
            <Col xs={11} sm={3} className="ms-3 d-flex">
                <div className="reset-filter">Reset</div>
            </Col>
        </Row>

        <Divider className="dark-divider" />

        <Row className="p-4">
            <Col sm={5}>
                <div className="main-title p-0">Active Business Promotionss</div>
            </Col>
            <Col sm={5}>
                <div className="">Total 29 active promotions available</div>
            </Col>
        </Row>

        <Row className="p-4 pt-0">
            <Table bordered hover>
                <thead>
                    <tr>
                        {tableHeader?.map(data => {
                            return <th style={{ background: "#e9e8e8" }}>{data?.Name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map(data => {
                        return (
                            <tr>
                                <td>
                                    <div>
                                        <p className="m-0 table-promo-title">{data?.promoTitle}</p>
                                        <p className="m-0">{data?.promoDescription}</p>
                                    </div>
                                </td>
                                <td>{data?.startDate}</td>
                                <td>{data?.endDate}</td>
                                <td>{data?.deviceType}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Row>


    </div>
}

export default BodyPart