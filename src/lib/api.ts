const BASE_URL = "http://localhost:4000/todos";

export interface Todo {
    id: number;
    text: string;
    active: boolean;
    done: boolean;
}

export const getTodos = (): Promise<Todo[]> =>
    fetch(`${BASE_URL}`).then((res) => res.json())