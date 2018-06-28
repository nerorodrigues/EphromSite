$ ()->
  $(window).load ()->
    $(".more-button").each ()->
      btn = $ @
      targetID = btn.data "target"
      btn.click (e)->
        e.preventDefault()
        $(@).toggleClass("btn-expanded").blur()
        $("##{targetID}").toggleClass "more-text-show"

    habilitarEnviar = ->
      $("#btn-enviar").prop "disabled", false
      $("#btn-enviar").html "Enviar"
      return

    $("#form-email").submit (e) ->
      $("#btn-enviar").prop "disabled", true
      $("#btn-enviar").html "Enviando..."
      nome = $("input[name=nome]").val()
      email = $("input[name=email]").val()
      empresa = $("input[name=empresa]").val()
      cargo = $("input[name=cargo]").val()
      mensagem = $("textarea[name=mensagem]").val()
      if not nome or not empresa or not cargo or not email or not mensagem
        alert "Todos os campos devem ser preenchidos!"
        habilitarEnviar()
      else
        url = "http://discussao.talkprocess.com.br/server/DeptoDesenvFontes/Projetos/Ephrom/Designer/BPE/Utilitarios/Interfaces/XIMensagem/EnviaMensagemSimples"
        msg = "<h2>Contato do Site Ephrom.</h2>"
        msg += "<br><strong>Nome: </strong>" + nome
        msg += "<br><strong>E-mail: </strong>" + email
        msg += "<br><strong>Empresa: </strong>" + empresa
        msg += "<br><strong>Cargo: </strong>" + cargo
        msg += "<br><strong>Mensagem: </strong>" + mensagem
        data =
          pDestinatario: "contato@ephrom.com.br"
          pUsuarioRemetenteID: "00000002-0000-0000-0000-000000000000"
          pCaixaDeEntradaRemetenteID: "00000025-0000-0000-0000-000000000000"
          pAssunto: "Contato do Site Ephrom"
          pCorpo: msg
          pIsHtml: true

        $.ajax data =
          url: url
          type: "POST"
          crossDomain: false
          contentType: "application/json; charset=utf-8"
          cache: true
          data: JSON.stringify(data)
          dataType: "json"
          success: (data, textStatus, jqXHR) ->
            alert "Sua mensagem foi enviada com sucesso!"
            habilitarEnviar()
            return

          error: (jqXHR, textStatus, errorThrown) ->
            alert "Erro ao tentar enviar a mensagem!\rEntre em contato através do e-mail contato@ephrom.com.br"
            habilitarEnviar()
            return
      false
