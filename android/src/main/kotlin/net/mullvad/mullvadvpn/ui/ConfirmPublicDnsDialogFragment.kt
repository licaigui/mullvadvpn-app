package net.mullvad.mullvadvpn.ui

import android.app.Dialog
import android.content.DialogInterface
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.support.v4.app.DialogFragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams
import android.widget.Button
import kotlinx.coroutines.CompletableDeferred
import net.mullvad.mullvadvpn.R

class ConfirmPublicDnsDialogFragment : DialogFragment() {
    var confirmPublicDns: CompletableDeferred<Boolean>? = null

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val view = inflater.inflate(R.layout.confirm_public_dns, container, false)

        view.findViewById<Button>(R.id.back_button).setOnClickListener {
            activity?.onBackPressed()
        }

        view.findViewById<Button>(R.id.confirm_button).setOnClickListener {
            confirmPublicDns?.complete(true)
            confirmPublicDns = null
            dismiss()
        }

        return view
    }

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = super.onCreateDialog(savedInstanceState)

        dialog.window?.setBackgroundDrawable(ColorDrawable(android.R.color.transparent))

        return dialog
    }

    override fun onStart() {
        super.onStart()

        dialog?.window?.setLayout(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT)

        if (confirmPublicDns == null) {
            dismiss()
        }
    }

    override fun onDismiss(dialogInterface: DialogInterface) {
        confirmPublicDns?.complete(false)
    }

    override fun onDestroy() {
        confirmPublicDns?.cancel()

        super.onDestroy()
    }
}
