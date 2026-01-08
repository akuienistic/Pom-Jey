import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const getToastIcon = (variant?: string) => {
  switch (variant) {
    case "destructive":
      return <AlertCircle className="h-5 w-5 text-destructive-foreground" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case "info":
      return <Info className="h-5 w-5 text-secondary" />;
    default:
      return <CheckCircle className="h-5 w-5 text-primary" />;
  }
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getToastIcon(variant)}
              </div>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
