
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { User, Mail, Phone, MapPin, CreditCard } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(10, { message: "Address must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface CheckoutFormProps {
  onClose: () => void;
}

const CheckoutForm = ({ onClose }: CheckoutFormProps) => {
  const { toast } = useToast();
  const { clearCart, cartItems } = useCart();
  
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Order placed successfully!",
      description: `Thank you for your order, ${data.name}. Your ${formatCurrency(totalAmount)} purchase will be delivered to your address soon.`,
    });
    
    clearCart();
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <User className="h-4 w-4" /> Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Phone Number
              </FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Delivery Address
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your full address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="h-5 w-5 text-threadflare-orange" />
            <h3 className="font-medium">Payment Method</h3>
          </div>
          <p className="text-sm text-gray-600">Cash on Delivery (COD)</p>
          <p className="text-sm font-medium mt-2">Total: {formatCurrency(totalAmount)}</p>
        </div>

        <div className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            type="submit" 
            className="bg-orange-gradient hover:shadow-lg hover:shadow-orange-200/40"
          >
            Place Order
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
