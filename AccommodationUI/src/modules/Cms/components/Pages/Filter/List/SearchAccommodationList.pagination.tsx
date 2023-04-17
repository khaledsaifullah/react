import React, { FC } from 'react'
import { Row, Col } from 'antd';
import Pagination from "../../../../../../components/Pagination/Pagination";
import { ItemsPerPageDefaultOptions } from "../../../../../../utils/enums";
import PaginationTotalItem from "../../../../../../components/Pagination/PaginationTotalItem";

const SearchAccommodationListPagination: FC<any> = props => {
    const { pagination, totalCount, handleOnChanged } = props;
    return (
        <div className="listing-page-pagination">
            <Row className='px-3'>
                <Col xs={24} md={12} className="text-md-end">
                    <div>
                        <PaginationTotalItem currentPage={pagination.currentPage} pageSize={pagination.pageSize} total={totalCount} />
                    </div>
                </Col>
                <Col xs={24} md={12} className="text-md-end">
                    <Pagination pageSizeOptions={ItemsPerPageDefaultOptions} currentPage={pagination.currentPage} pageSize={pagination.pageSize} total={totalCount} onChangePage={(page, pageSize) => handleOnChanged('pagination_change_page_and_size', page, pageSize)} />
                </Col>
            </Row>
        </div>
    );
}

export default React.memo(SearchAccommodationListPagination);