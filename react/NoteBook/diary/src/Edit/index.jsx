import React, { useState } from 'react';
import './style.css';
import { List } from 'antd';
import { DatePicker, InputItem, TextareaItem } from 'antd-mobile';

const Edit = () => {
    const [date, setState] = useState()
    return (
        <div className="diary-edit">
            <List renderHeader={() => '编辑日记'}>
                <InputItem placeholder="请输入标题" clear>
                    标题
                </InputItem>
                <TextareaItem placeholder="请输入日记内容" rows={6}>
                </TextareaItem>

                <DatePicker 
                    mode="date" 
                    title="请选择日期" 
                    extra="请输入日期" value={date} 
                    onChange={date => this.setState(date)}>
                </DatePicker>
            </List>
        </div>
    )
}
export default Edit
