import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLanguage } from "../../hooks/useLanguage";
import { emailjsApi, EmailjsParams } from "../../services/emailjs";
import { StyledForm } from "./styles";

type Inputs = {
  name: string;
  email: string;
  company: string;
  role: string;
  telephone: string;
  message: string;
  policyAccepted: boolean;
}

export function ContactUsForm() {
  const { language } = useLanguage();

  const isEnglish = language === 'en';

  const { register, reset, handleSubmit, watch, formState: {isDirty, isValid} } = useForm<Inputs>({
    mode: 'onChange'
  });

  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

      const dataRequest: EmailjsParams = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: data,
      };

      await emailjsApi.post('/email/send', dataRequest);

      toast.success('Mensagem enviada com sucesso!', {
        style: {
          backgroundColor: '#0096D8',
        },
      });

      reset();
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao tentar enviar sua mensagem.');
    }

    setLoading(false);
  };

  return (
  <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <input placeholder={isEnglish ? 'Name' : 'Nome'} type="text" {...register("name", { required: true })} />

    <input placeholder={isEnglish ? 'Email' : 'Email Corporativo'} type="text" {...register("email", { required: true })} />

    <input placeholder={isEnglish ? 'Company' : 'Empresa'} type="text" {...register("company", { required: true })} autoComplete="off" />

    <input placeholder={isEnglish ? 'Position' : 'Cargo'} type="text" {...register("role", { required: true })} autoComplete="off" />

    <input placeholder={isEnglish ? 'Telephone number' : 'Telefone com DDI e DDD'} type="number" {...register("telephone", { required: true })} autoComplete="off" />

    <textarea placeholder={isEnglish ? 'Message' : 'Mensagem'} cols={30} rows={30} {...register("message")}></textarea>

    <div className="checkbox-container">
      <input type="checkbox" {...register("policyAccepted", { required: true })} />
      <span>{isEnglish ? `I've read and accept the IBF Privacy Policy.` : 'Eu li e aceito a Política de Privacidade da IBRA'}</span>
    </div>

    {
      !isEnglish 
      ? (<p>Seu consentimento é necessário para garantir o correto uso da privacidade e viabilizar a comunicação direta entre você e a IBRA.</p>) 
      : <br />
    }

    <button type="submit" disabled={!isDirty || !isValid || isLoading}>ENVIAR</button>
  </StyledForm>
  );  
}