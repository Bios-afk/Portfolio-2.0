import type { ChangeEvent } from 'react';

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    multiline?: boolean;
    error?: string;
    success?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name?: string;
}

/** Text input — contact forms. Underline style, jade focus ring, optional error state. */
export function Input({
    label,
    placeholder,
    type = 'text',
    multiline = false,
    error,
    success,
    value,
    defaultValue,
    onChange,
    name,
}: InputProps) {
    const Tag = multiline ? 'textarea' : 'input';
    const borderCls = error
        ? 'border-error focus:border-error'
        : success
          ? 'border-jade focus:border-jade'
          : 'border-border-subtle focus:border-jade';
    return (
        <label className="flex flex-col gap-2 font-sans">
            {label && (
                <span className="font-mono text-xs tracking-[0.08em] text-gray-caption uppercase">
                    {label}
                </span>
            )}
            <Tag
                type={multiline ? undefined : type}
                placeholder={placeholder}
                rows={multiline ? 4 : undefined}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                aria-invalid={error ? 'true' : undefined}
                className={`rounded-md border-0 border-b bg-card ${borderCls} resize-y px-3 py-2.5 font-sans text-base leading-[1.6] text-white transition-colors duration-120 outline-none placeholder:text-gris-texte`}
            />
            {error && (
                <span role="alert" className="font-mono text-xs text-error">
                    {error}
                </span>
            )}
        </label>
    );
}
