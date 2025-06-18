import React from "react";

interface InputProps {
  element: "input" | "textarea"; //Define se sera um <input> ou <textarea>
  id: string; // ID do elemento (ligado ao label com htmlFor)
  type?: string; //Tipo do input (ex: text, email, password...)
  placeholder?: string; //texto do placeholder
  label: string; // texto do <label> mostrado acima do input
  rows?: number; //Numero de linhas para o <textarea>
  value?: string; //valor controlado do input
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // Função chamada quando o valor muda
  required?: boolean; //se o campo é obrigatorio (adiciona ^* e HTML required)
  error?: string; //mensagem de erro (exibida abaixo do campo se existir)
}

const Input: React.FC<InputProps> = (props) => {
  //Cria o componente funcional Input, que recebe props do tipo InputProps.
  const baseClasses = `
     w-full px-3 py-2 border rounded-md 
    focus:outline-none focus:ring-2 focus:ring-purple-500 
    placeholder-gray-400 transition-colors duration-200
    ${
      props.error    //condicional se houver erro aplica a borda vermelha
        ? "border-red-500 focus:border-red-500"
        : "border-gray-300 focus:border-purple-500"
    }
  `;
  const element =
  props.element === 'input' ? (  // Define qual elemento renderizar: se for 'input', renderiza um <input>, senão, um <textarea>.

    <input   //Cria um <input> com atributos básicos e classes.
    id={props.id}
    type={props.type || 'text'}  // type: se não for passado, assume "text".
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}  //onChange, value: torna o input controlado (controlado pelo React).
    required={props.required}  //required: ativa validação HTML.
    className={baseClasses}
    />
  )  : (
    <textarea    // Cria um <textarea> com atributos semelhantes.

    id={props.id}
    rows={props.rows || 3}  // rows: define altura vertical (padrão 3).
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    required={props.required}
    className={`${baseClasses} resize-none`}  // resize-none: impede redimensionamento manual.
    />
  );
    return (
        <div className="mb-4">
            <label              // Cria o <label> associado ao id.
                                //– Se required, adiciona um asterisco vermelho.
            htmlFor={props.id}  // – htmlFor={props.id} garante acessibilidade funcionalidade.
            className="block text-sm font-medium text-gray-700 mb-2" 
            >  
                {props.label}
                {props.required && <span className="text-red-500 ml-1">*</span>} 
            </label> 
            {element} 
            {props.error && (
                <p className="mt-1 text-sm text-red-600"> {props.error}</p>
            )} 
        </div>
    )
};
export default Input;
