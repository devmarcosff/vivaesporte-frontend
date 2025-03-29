"use client"
import { withToastFeedback } from "@/components/functions/withToastFeedback";
import apiClient from "@/lib/api-client";
import { StudentInput } from "@/views/students/students";
import { useState } from "react";

export const getAllStudent = async () => {
  return withToastFeedback(
    () => apiClient.get(`/students`).then(res => res.data),
    {
      loading: "Buscando alunos...",
      success: "Alunos encontrados!",
      error: "Erro ao buscar alunos",
      descriptions: {
        loading: "Aguarde enquanto buscamos para você!",
        success: "Agora você pode ver os dados dos alunos.",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const getStudentById = async (id: string) => {
  return withToastFeedback(
    () => apiClient.get(`/students/${id}`).then(res => res.data),
    {
      loading: "Buscando aluno...",
      success: (data) => `Detalhes o aluno "${data.name}"`,
      error: "Erro ao buscar aluno",
      descriptions: {
        loading: "Aguarde enquanto buscamos para você!",
        success: "Ativo",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const createStudent = async (payload: StudentInput) => {
  return withToastFeedback(
    () => apiClient.post(`/students`, payload).then(res => res.data),
    {
      loading: "Inserindo aluno...",
      success: "Aluno inserido com sucesso!",
      error: "Erro ao inserir aluno",
      descriptions: {
        loading: "Aguarde enquanto processamos os dados!",
        success: "Aluno cadastrado com sucesso!",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const editStudentProfile = async (
  id: string,
  payload: { name: string; birthDate: string }
) => {
  return withToastFeedback(
    () => apiClient.put(`/students/${id}`, payload).then(res => res.data),
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

export const updateStudent = async (
  id: string,
  payload: { name: string; birthDate: string }
) => {
  return withToastFeedback(
    () => apiClient.put(`/students/${id}`, payload).then(res => res.data),
    {
      loading: "Editando aluno...",
      success: "Aluno editado com sucesso!",
      error: "Erro ao editar aluno",
      descriptions: {
        loading: "Aguarde enquanto atualizamos os dados!",
        success: "As informações foram salvas com sucesso!",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};

export const deleteStudent = async (id: string) => {
  return withToastFeedback(
    () => apiClient.delete(`/students/${id}`).then(res => res.data),
    {
      loading: "Desligando aluno...",
      success: "Aluno desligado com sucesso!",
      error: "Erro ao remover aluno",
      descriptions: {
        loading: "Aguarde enquanto processamos a exclusão!",
        success: "O aluno foi desligado do sistema com sucesso.",
        error: "Algo inesperado aconteceu. Tente novamente!",
      },
    }
  );
};