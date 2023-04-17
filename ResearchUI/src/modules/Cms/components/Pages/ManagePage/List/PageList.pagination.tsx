import React, { FC } from "react";
import { Row, Col } from "antd";
import Pagination from "../../../../../../components/Pagination/Pagination";
import { ItemsPerPageDefaultOptions } from "../../../../../../utils/enums";
import PaginationTotalItem from "../../../../../../components/Pagination/PaginationTotalItem";

const PageListPagination: FC<any> = (props) => {
  const { pagination, totalCount, handleOnChanged } = props;
  return (
    <div className="listing-page-pagination">
      <Row>
        <Col span={12}>
          <div className="footer-total-items">
            <PaginationTotalItem
              currentPage={pagination.currentPage}
              pageSize={pagination.pageSize}
              total={totalCount}
            />
          </div>
        </Col>
        <Col span={12} className="right">
          <Pagination
            pageSizeOptions={ItemsPerPageDefaultOptions}
            currentPage={pagination.currentPage}
            pageSize={pagination.pageSize}
            total={totalCount}
            onChangePage={(page, pageSize) =>
              handleOnChanged("pagination_change_page_and_size", page, pageSize)
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(PageListPagination);
