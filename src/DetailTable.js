import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./index.css";
class DetailTable extends Component {
  constructor(props) {
    super(props);
  }

  getTableList = (dataSource, columns, columnCount) => {
    const columnsForTwDimension = [];
    let number = 0;
    //确定切割数组的索引下标
    let splitIndexArr = columns
      .map(item => {
        item.colspan = (item.colspan || 1) + 1;
        return item;
      })
      .reduce((arr, item, index, sourceArr) => {
        number += item.colspan;
        if (number > columnCount) {
          sourceArr[index - 1].colspan += columnCount - (number - item.colspan);
          number = item.colspan;
          arr.push(index);
        }
        return arr;
      }, []);

    columns[columns.length - 1].colspan += columnCount - number;

    //根据切割下标将一维数组拆成二维数组
    splitIndexArr.push(columns.length);
    splitIndexArr.reduce((pre, next) => {
      let _arr = columns.slice(pre, next);
      columnsForTwDimension.push(_arr);
      return next;
    }, 0);
    return columnsForTwDimension;
  };

  handleChildren = (dataSource, subList) => {
    let children = [];
    subList.forEach((one, index) => {
      children.push(
        <th key={`${one.dataIndex}th${index}`} className="detail-table-th">
          {one.title}
        </th>,
        <td
          key={`${one.dataIndex}td${index}`}
          colspan={one.colspan - 1}
          className="detail-table-td"
        >
          {one.render
            ? one.render(dataSource[one.dataIndex], dataSource)
            : dataSource[one.dataIndex]}
        </td>
      );
    });
    return children;
  };
  render() {
    const {
      dataSource,
      columns,
      columnCount = 4,
      className,
      style
    } = this.props;

    const tableList = this.getTableList(dataSource, columns, columnCount);

    return (
      <table style={style} className={`detail-table ${className}`}>
        {tableList.map((subList, index) => {
          return (
            <tr key={index} className="detail-table-tr">
              {this.handleChildren(dataSource, subList)}
            </tr>
          );
        })}
      </table>
    );
  }
}
export default DetailTable;
