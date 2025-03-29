"use client"
import { withToastFeedback } from "@/components/functions/withToastFeedback";
import apiClient from "@/lib/api-client";
import { StudentInput } from "@/views/students/students";
import { TeachersInput } from "./teachers";

export const getAllTeachers = async () => {
  return withToastFeedback(
    () => apiClient.get(`/users`).then(res => res.data),
    {
      loading: "Buscando professor...",
      success: "Professor encontrados!",
      error: "Erro ao buscar professor",
      descriptions: {
        loading: "Aguarde enquanto buscamos para você!",
        success: "Agora você pode ver os dados dos professores.",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const getTeachersById = async (id: string) => {
  return withToastFeedback(
    () => apiClient.get(`/users/${id}`).then(res => res.data).catch(err => err),
    {
      loading: "Buscando professor...",
      success: (data) => `Detalhes o professor "${data.name}"`,
      error: "Erro ao buscar professor",
      descriptions: {
        loading: "Aguarde enquanto buscamos para você!",
        success: "Ativo",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const createTeachers = async (payload: TeachersInput) => {
  return withToastFeedback(
    () => apiClient.post(`/users`, payload).then(res => res.data),
    {
      loading: "Inserindo professor...",
      success: "Professor inserido com sucesso!",
      error: "Erro ao inserir professor",
      descriptions: {
        loading: "Aguarde enquanto processamos os dados!",
        success: "Professor cadastrado com sucesso!",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const editTeachersProfile = async (
  id: string,
  payload: { name: string, email: string, }
) => {
  return withToastFeedback(
    () => apiClient.put(`/users/${id}`, payload).then(res => res.data),
    {
      loading: "Editando perfil...",
      success: "Perfil editado com sucesso!",
      error: "Erro ao editar perfil",
      descriptions: {
        loading: "Atualizando os dados do aluno.",
        success: "As informações foram atualizadas com sucesso!",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const updateTeachers = async (
  id: string,
  payload: TeachersInput
) => {
  return withToastFeedback(
    () => apiClient.put(`/users/${id}`, payload).then(res => res.data),
    {
      loading: "Editando professor...",
      success: "Professor editado com sucesso!",
      error: "Erro ao editar professor",
      descriptions: {
        loading: "Aguarde enquanto atualizamos os dados!",
        success: "As informações foram salvas com sucesso!",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const deleteTeachers = async (id: string) => {
  return withToastFeedback(
    () => apiClient.delete(`/users/${id}`).then(res => res.data),
    {
      loading: "Desligando professor...",
      success: "Professor Desligado com sucesso!",
      error: "Erro ao remover professor",
      descriptions: {
        loading: "Aguarde enquanto processamos a exclusão!",
        success: "O professor foi Desligado do sistema com sucesso.",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};