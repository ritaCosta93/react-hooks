import React, {
  useState, 
  useEffect, 
  useMemo, 
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer
}from 'react';

interface User {
  name:string,
  login: string,
  avatar_url: string,
}

const App: React.FC = () => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const [users,setUsers] = useState<[User]>();
  const names = useMemo(() => users?.map(user => user.name).join(',') || '', [users]);
  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`),[]);
  
  inputRef.current?.focus();

  return(
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default App;
