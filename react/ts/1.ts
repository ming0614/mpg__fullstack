type functionProps = {
    // onSomething 函数 参数+返回值 
    a:number
    onSomething: () => void;
    // input num 
    onChange:(id:number) => void;
    //@types/react  泛型如何  去做这件事？
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}



// T  类型的占位 
type Dog<T> = {name:string,type:T}
const dog:Dog<string> = {name: 'mmm',type:"111111"}
React.MouseEvent<HTMLButtonElement>


interface Props {

}
const Item:React.FC<Props> = () => (
    return (
        <div>

        </div>
    )
)