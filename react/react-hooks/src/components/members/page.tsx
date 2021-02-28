import * as React from 'react';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';
import { memberAPI } from '../../api/members';



interface State{
  members:[]
}
interface Props{
    // member: any[]
    member: MemberEntity[];
}
export class MemberPage extends React.Component<PaymentResponse,State> {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }
  // public 
  public componentDidMount() {
    // 组件和API 分离点在这里
    // ajax 
    // memberAPI
    this.setState({
      members: memberAPI.fetchMembers()
    })
  }

  render() {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              // 遍历我们的state 数据， ts 会报错呢？ state 类型是什么，
              // 显示每个用户的 MemberRow 组件
              this.state.members.map((member) => <MemberRow 
                member={member}
              />)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
