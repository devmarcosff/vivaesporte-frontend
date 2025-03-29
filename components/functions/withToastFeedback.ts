import { toast } from "sonner";

type FeedbackTexts<T> = {
  loading: string;
  success: string | ((result: T) => string);
  error: string;
  descriptions?: {
    loading?: string;
    success?: string;
    error?: string;
  };
};

export async function withToastFeedback<T>(
  fn: () => Promise<T>,
  texts: FeedbackTexts<T>,
  options?: {
    duration?: number;
    classNames?: {
      loading?: string;
      success?: string;
      error?: string;
    };
    icon?: {
      success?: string;
      error?: string;
    };
  }
): Promise<T> {
  const toastId = toast.loading(texts.loading, {
    description: texts.descriptions?.loading,
    classNames: {
      description: options?.classNames?.loading || '!text-neutral-600',
    },
  });

  try {
    const result = await fn();

    const successTitle =
      typeof texts.success === "function" ? texts.success(result) : texts.success;

    toast.success(successTitle, {
      id: toastId,
      duration: options?.duration || 2000,
      description: texts.descriptions?.success,
      icon: options?.icon?.success ?? '✅',
      classNames: {
        description: options?.classNames?.success || '!text-green-800',
      },
    });

    return result;
  } catch (error) {
    toast.error(texts.error, {
      id: toastId,
      duration: options?.duration || 2000,
      description: texts.descriptions?.error,
      icon: options?.icon?.error ?? '❌',
      classNames: {
        description: options?.classNames?.error || '!text-red-800',
      },
    });
    throw error;
  }
}